import { Product } from  './product';

export class CombinedProduct extends Product {
    compositionDescription: string[];
    productsIds: number[];

    public isLabelVisible: boolean = false;
    public labelText: string;

    public setLable(labelText: string) {
        this.isLabelVisible = true;
        this.labelText = labelText;
    }

    constructor(id: number, title: string, desc: string, price: number, compDesc: string[], productsIds: number[] )
    {
        super(id, title, desc, price);
        this.compositionDescription = compDesc;
        this.productsIds = productsIds;
    }
}