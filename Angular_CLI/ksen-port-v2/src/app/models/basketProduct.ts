export class BasketProduct {
    productId: number;
    count: number;
    price: number;

    constructor(productId: number, count: number, price: number) {
        this.productId = productId;
        this.count = count;
        this.price = price;
    }
};