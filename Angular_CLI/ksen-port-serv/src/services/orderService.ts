import { IOrder, OrderModel } from '../models/order';
import { service as ProductService } from './productService';
import { resolve } from 'url';

interface IProductRemnants {
    id: string,
    remnants: number
}

class OrderService {

    async CreateOrder(products: { id: string, count: number }[], address: string,
        fio: string, comments: string): Promise<void> {

        this.CheckProductRemnants(products).then(
            (result: boolean) => {
                await OrderModel.create({
                    products: products,
                    address: address,
                    fio: fio,
                    comments: comments
                } as IOrder);
            },
            (reason) => {

            });        
    }
    
    async CheckProductRemnants(products: { id: string, count: number }[]): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            let rejectResponse: IProductRemnants[] = [];
            for (let i = 0; i < products.length; i++) {
                let product = await ProductService.ReadProduct(products[i].id);
                let diff = products[i].count - product.count;
                if (diff > 0) {
                    rejectResponse.push({ 
                        id: product.id, 
                        remnants: diff
                    } as IProductRemnants);
                }
            }
            if (rejectResponse.length > 0) reject(rejectResponse);
            resolve(true);
        });
    }
}

export const service: OrderService = new OrderService;