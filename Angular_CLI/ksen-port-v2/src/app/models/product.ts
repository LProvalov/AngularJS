
export class Product {
    id: number;
    title: string;
    description: string;
    price: number;

    constructor(id: number, title: string, desc: string, price: number)
    {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.price = price;
    }
}

