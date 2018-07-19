import * as mongoose from 'mongoose';
import { RepositoryBase } from './../providers/repositoryBase';
import { BaseModel, IBaseModel } from './baseModel';

var Schema = mongoose.Schema;

export interface IOrder extends mongoose.Document {
    products: [{ id: string, count: number }],
    address: string,
    fio: string,
    comments: string
}

let _productsSchema = new Schema({
    id: {
        type: String,
        required: true,
        default: ""
    },
    count: {
        type: Number,
        required: true,
        default: 0
    }
});
let _orderSchema = new Schema({
    products: {
        type: [_productsSchema],
        required: true,
        default: []
    },
    address: {
        type: String,
        required: true,
        default: ""
    },
    fio: {
        type: String,
        required: true,
        default: ""
    },
    comments: {
        type: String,
        required: false,
        default: ""
    }
});

var _model = mongoose.model<IOrder>('order', _orderSchema, 'orders', true);

export class OrderRepository extends RepositoryBase<IOrder> {
    constructor() {
        super(_model);
    }
}
Object.seal(OrderRepository);

class OrderModelClass extends BaseModel<IOrder> implements IBaseModel<IOrder> {
    constructor() {
        super();
    }
}
Object.seal(OrderModelClass);
export const OrderModel: OrderModelClass = new OrderModelClass();