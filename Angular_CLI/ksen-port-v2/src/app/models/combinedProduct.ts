import { Product } from  './product';

export class CombinedProduct extends Product {
    compositionDescription: string[];
    products: Product[];

    constructor(id: number, title: string, desc: string, price: number, compDesc: string[], products: Product[] )
    {
        super(id, title, desc, price);
        this.compositionDescription = compDesc;
        this.products = products;
    }
}