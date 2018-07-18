import * as mongoose from 'mongoose';
import { RepositoryBase } from './../providers/repositoryBase';
import { resolve } from 'dns';

var Schema = mongoose.Schema;
export interface IBaseModel<T> {
    findById(id: string): Promise<T>;
    getPage(pageSize: number, pageNumber: number): Promise<T[]>;
}
export class BaseModel<T extends mongoose.Document> implements IBaseModel<T>{
    //private _documnet: mongoose.Document;
    private _repo: RepositoryBase<T>;

    constructor(/*document: mongoose.Document,*/ repo: RepositoryBase<T>) {
        //this._documnet = document;
        this._repo = repo;
    }

    public findById(id: string): Promise<T> {
        return new Promise<T>(
            (resolve: Function, reject: Function) => {
                this._repo.findById(id, (error: any, result: T) => {
                    if (error) reject(error);
                    resolve(result);
                });
            }
        );
    }

    public create(object: T): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this._repo.create(object, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    public update(object: T): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._repo.update(object._id, object, (err, res) => {
                if (err) reject(err);
                resolve(true);
            });
        });
    }

    public delete(object: T): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._repo.delete(object._id, (err, res) => {
                if (err) reject(err);
                resolve(true);
            });
        });
    }

    public readById(id: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this._repo.findById(id, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    public getAll(): Promise<T[]> {
        return new Promise<T[]>((resolve, reject) => {
            this._repo.find({}).exec((err, res) => {
                if (err) reject(err);
                if (res.length) resolve(res);
                else resolve([]);
            });
        });
    }

    public getPage(pageSize: number, pageNumber: number): Promise<T[]> {
        return this._repo.find({}).skip(+(pageSize * (pageNumber - 1))).limit(+pageSize).exec();
    }

    public getPageCond(pageSize: number, pageNumber: number, cond: object): Promise<T[]> {
        return this._repo.find(cond).skip(+(pageSize * (pageNumber - 1))).limit(+pageSize).exec();
    }

    public count(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this._repo.count({}, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

}