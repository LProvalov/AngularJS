import * as mongoose from 'mongoose';
import { RepositoryBase } from './../providers/repositoryBase';
import { BaseModel, IBaseModel } from './baseModel';

var Schema = mongoose.Schema;

export interface IProduct extends mongoose.Document {
    title: string;
    description: string;
    price: number;
    label: boolean;
    lebelMessage: string;
    count: number;
    pictureId: string;
}

let _productSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    label: {
        type: Boolean,
        required: false,
        default: false
    },
    labelMessage: {
        type: String,
        required: false,
        default: ""
    },
    count: {
        type: Number,
        required: true,
        default: 0
    },
    pictureId: {
        type: String,
        required: true,
        default: ""
    }
});

var _model = mongoose.model<IProduct>('product', _productSchema, 'products', true);
export class ProductRepository extends RepositoryBase<IProduct> {
    constructor() {
        super(_model);
    }
}
Object.seal(ProductRepository);

export class ProductModel extends BaseModel<IProduct> implements IBaseModel<IProduct>  {

    constructor(){
        super(new ProductRepository());
    }
}
Object.seal(ProductModel);