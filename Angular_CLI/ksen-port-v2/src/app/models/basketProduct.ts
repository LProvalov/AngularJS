export class BasketProduct {
    productId: number;
    count: number

    constructor(productId: number, count: number) {
        this.productId = productId;
        this.count = count;
    }
};