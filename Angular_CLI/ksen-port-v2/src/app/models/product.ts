
export class Product {
    id: number;
    title: string;
    description: string;
    price: number;

    public isLabelVisible: boolean = false;
    public labelText: string;

    public setLable(labelText: string): Product {
        this.isLabelVisible = true;
        this.labelText = labelText;
        return this;
    }

    constructor(id: number, title: string, desc: string, price: number)
    {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.price = price;
    }
}

