import * as mongoose from 'mongoose';
import { RepositoryBase } from './../providers/repositoryBase';

var Schema = mongoose.Schema;

abstract class BaseDAO<D extends mongoose.Document> {
    private _document: D;
    private _collectionName: string;
    private _model: mongoose.Model<D>;
    private _repository: RepositoryBase<D>;

    constructor(model: D, 
        modelName: string, 
        mongooseSchema: mongoose.Schema,
        collectionName: string,
    ) {
        this._document = model;
        this._model = mongoose.model<D>(modelName, mongooseSchema, collectionName, true);
        this._repository = new RepositoryBase<D>(this._model);
        Object.seal(this._repository);
    }


}