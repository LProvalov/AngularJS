export class BasketProduct {
    productId: string;
    count: number;
    price: number;

    constructor(productId: string, count: number, price: number) {
        this.productId = productId;
        this.count = count;
        this.price = price;
    }
};