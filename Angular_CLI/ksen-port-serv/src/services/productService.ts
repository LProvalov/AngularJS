
import { IProduct, ProductModel } from './../models/product';
import { IBaseModel } from '../models/baseModel';

class ProductService {
    async ReadProductPagination(pageSize: number, pageCount: number): Promise<IProduct[]> {
        return await (ProductModel as IBaseModel<IProduct>).getPage(pageSize, pageCount);
    }

    async CountProduct(): Promise<number> {

    }
}

export const service: ProductService = new ProductService();