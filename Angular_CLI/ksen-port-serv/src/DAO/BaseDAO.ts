import * as mongoose from 'mongoose';
import { RepositoryBase } from './../providers/repositoryBase';

var Schema = mongoose.Schema;

export abstract class BaseDAO<D extends mongoose.Document> {
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
        this.readById = this.readById.bind(this);
        this.create = this.create.bind(this);
    }

    readById(id: string): Promise<D> {
        return new Promise<D>( (resolve, reject) => {
            this._repository.findById(id, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    create(obj: D): Promise<D>{
        return new Promise<D>( (resolve, reject) => {
            this._repository.create(obj, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    update(obj: D): Promise<boolean> {
        return new Promise<boolean>( (resolve, reject) => {
            this._repository.update(obj._id, obj, (err, res) => {
                if(err) reject(err);
                resolve(true);
            });
        });
    }

    delete(obj: D): Promise<boolean> {
        return new Promise<boolean>( (resolve, reject) => {
            this._repository.delete(obj.id, (err, res) => {
                if(err) reject(err);
                resolve(true);
            });
        });
    }
}