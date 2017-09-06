import * as mongoose from 'mongoose';
import { RepositoryBase } from './../providers/repositoryBase';

var Schema = mongoose.Schema;

export interface IPicture extends mongoose.Document {
    title: string;
    description: string;
    path: string;
    uploadedAt: Date;    
}

let _pictureSchema = new Schema({
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
    uploadedAt: {
        type: Date,
        required: false,
        default: Date.now()
    },
    path: {
        type: String,
        required: true
    }
}).pre('save', function(next){
    if(this._doc){
        let doc = <IPicture>this._doc;
        let now = new Date();
        if(!doc.uploadedAt){
            doc.uploadedAt = now;
        }
    }
    next();
    return this;
});

var _model = mongoose.model<IPicture>('picture', _pictureSchema, 'pictures', true);
export class PictureRepository extends RepositoryBase<IPicture> {
    constructor(){
        super(_model);
    }
}
Object.seal(PictureRepository);

export class PictureModel {

    private _document: IPicture;

    static findPictureById(id: string) : Promise<IPicture>{
        var repo = new PictureRepository();
        return new Promise<IPicture>(
            (resolve: Function, reject: Function) => {
                repo.findById(id, (error: any, result: IPicture) => {
                    if(error) reject(error);
                    resolve(result);
                });
            }
        );       
    }

    static createPicture(picture: { title: string, description: string, path: string}): Promise<IPicture> {
        return new Promise<IPicture>((resolve, reject) => {
            let repo = new PictureRepository();
            let pictureModel = <IPicture>{
                title: picture.title,
                description: picture.description,
                path: picture.path
            };
            repo.create(pictureModel, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    static updatePicture(picture: IPicture): Promise<boolean> {
        return new Promise<boolean>( (resolve, reject) => {
            let repo = new PictureRepository();
            repo.update(picture._id, picture, (err, res) => {
                if(err) reject(err);
                resolve(true);
            });
        });   
    }

    static deletePicture(picture: IPicture): Promise<boolean> {
        return new Promise<boolean>( (resolve, reject) => {
            let repo = new PictureRepository();
            repo.delete(picture.id, (err, res) => {
                if(err) reject(err);
                resolve(true);
            });
        });
    }

    static readPictureById(id: string): Promise<IPicture> {
        return new Promise<IPicture>( (resolve, reject) => {
            let repo = new PictureRepository();
            repo.findById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    static getAllPictures(): Promise<IPicture[]> {
        return new Promise<IPicture[]>((resolve, reject) => {
            let repo = new PictureRepository();
            repo.find({}).exec((err, res) => {
                if(err) reject(err);
                if(res.length) resolve(res);
                else resolve(null);
            });
        });
    }

    static getPictures(pageSize: number, pageNumber: number): Promise<IPicture[]> {
        let repo = new PictureRepository();
        return repo.find({}).skip(+(pageSize * (pageNumber - 1))).limit(+pageSize).exec();
    }

    static picturesCount(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            let repo = new PictureRepository();
            repo.count({}, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    get title(): String {
        return this._document.title;
    }

    get description(): String {
        return this._document.description;
    }

    get uploadedAt(): Date {
        return this._document.uploadedAt;
    }

    get path(): String {
        return this._document.path;
    }
}

Object.seal(PictureModel);