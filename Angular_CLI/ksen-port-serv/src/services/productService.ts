
import { IProduct, ProductModel } from '../models/product';
import { IBaseModel } from '../models/baseModel';

class ProductService {

    async CreateProduct(title: string, description: string, price: number, label: boolean,
        labelMessage: string, count: number, pictureId: string): Promise<void> {
        await ProductModel.create(
            {
                title: title,
                description:description,
                price: price,
                label: label,
                labelMessage: labelMessage,
                count: count,
                pictureId: pictureId
            } as IProduct
        );
    }

    async UpdateProduct(product: IProduct): Promise<boolean> {
        return await ProductModel.update(product);
    }

    async ReadProductPagination(pageSize: number, pageNumber: number): Promise<IProduct[]> {
        return await ProductModel.getPage(pageSize, pageNumber);
    }

    async ReadProduct(productId: string): Promise<IProduct> {
        return await ProductModel.readById(productId);
    }

    async CountProduct(): Promise<number> {
        return await ProductModel.count();
    }
}

export const productService: ProductService = new ProductService();