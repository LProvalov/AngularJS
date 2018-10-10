import { IOrder, OrderModel } from '../models/order';
import { productService as ProductService } from './services';
import { resolve } from 'url';

export interface IProductRemnants {
    id: string,
    remnants: number
}

export interface CreateOrderResult {
    success: boolean;
    remnants?: IProductRemnants[]
}

class OrderService {

    async CreateOrder(products: { id: string, count: number }[], address: string,
        fio: string, comments: string): Promise<CreateOrderResult> {
        // this method should complete in one transaction
        let remnants = await this.CheckProductRemnants(products);
        if (remnants.length > 0) {
            return {
                success: false,
                remnants: remnants
            } as CreateOrderResult;
        } else {
            await OrderModel.create({
                products: products,
                address: address,
                fio: fio,
                comments: comments
            } as IOrder);
            await this.UpdateProductRemnants(products);
        }
        return { success: true } as CreateOrderResult;
    }

    private async CheckProductRemnants(products: { id: string, count: number }[]): Promise<IProductRemnants[]> {
        let remnants: IProductRemnants[] = [];
        for (let i = 0; i < products.length; i++) {
            let product = await ProductService.ReadProduct(products[i].id);
            let diff = products[i].count - product.count;
            if (diff > 0) {
                remnants.push({
                    id: product.id,
                    remnants: diff
                } as IProductRemnants);
            }
        }
        return remnants;
    }

    private async UpdateProductRemnants(products: { id: string, count: number }[]): Promise<void> {
        for (let i = 0; i < products.length; i++) {
            let product = await ProductService.ReadProduct(products[i].id);
            product.count -= products[i].count;
            await ProductService.UpdateProduct(product);
        }        
    }
}

export const orderService: OrderService = new OrderService;