
export class Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    groupId: string;
    descriptionPicIds: string[];
    pictureId: string;
    count: number;

    public label: boolean = false;
    public labelMessage: string;

    public setLable(labelText: string): Product {
        this.label = true;
        this.labelMessage = labelText;
        return this;
    }

    constructor(id: string, title: string, desc: string, price: number)
    {
        this._id = id;
        this.title = title;
        this.description = desc;
        this.price = price;
    }
}

