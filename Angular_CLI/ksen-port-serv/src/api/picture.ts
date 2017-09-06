import { Application, Request, Response } from "express";
import * as Busboy from 'busboy';
import { ApiBase } from "./apiBase";
import { PictureMetainfo, PictureGetQuery, PicturesGetQuery, PictureUpdateMetainfo,
    validatorPicture as PictureQueryValidator,
    validatorPictures as PicturesQueryValidator,
    validatorPictureMetainfo as PictureMetainfoValidator,
    validatorPictureUpdateMetainfo as PictureUpdateMetainfoValidator } from "./../models/pictureApi";
import { service as PictureService } from "./../services/pictureService";
import { IPicture } from "./../models/picture";

export class PictureApi extends ApiBase {

    public static create(app: Application) {
        app.get(`${ApiBase.apiUrl}/picture`, (req: Request, res: Response) => {
            new PictureApi().picture(req, res);
        });

        app.get(`${ApiBase.apiUrl}/pictures`, (req: Request, res: Response) => {
            new PictureApi().pictures(req, res);
        });

        app.post(`${ApiBase.apiUrl}/picture`, (req: Request, res: Response) => {
            new PictureApi().picturePost(req, res);
        });
    }

    constructor() {
        super();
    }

    protected picture(req: Request, res: Response) {
        try {
            let pictureQuery: PictureGetQuery = this.queryValidation<PictureGetQuery>(req.query, PictureQueryValidator);
            PictureService.ReadPictureMetainfo(pictureQuery.id).then((value) =>{
                res.status(200).send(JSON.stringify(value));
            });        
        } catch (e) {
            console.log(e);
            res.status(400).send();
        }
    }

    protected picturePost(req: Request, res: Response) {
        try{
            var busboy = new Busboy({ headers: req.headers });
            var fileUploaded = new Promise<string>( (resolve, reject ) => {
                busboy.on('file', (fildname: string, file: NodeJS.ReadableStream, filename: string,
                    encoding: string, mimetype: string) => {
                        let fileName: string = `${Date.now()}_${filename}`;
                        PictureService.SavePictureFileToLocal(file, fileName).then( (fullFilename) => {
                            resolve(fullFilename);
                        });
                });
            });
            var metainfoUploaded = new Promise<PictureMetainfo>( (resolve, reject ) => {
                busboy.on('field', (fieldname: string, val: any, fieldnameTruncated: boolean,
                    valTruncated: boolean, encoding: string, mimetype: string) => {
                        if(fieldname != "metainfo") throw new Error("Wrong field name in request.");
                        let metainfo: PictureMetainfo = this.queryValidation<PictureMetainfo>(val, PictureMetainfoValidator);
                        resolve(metainfo);                        
                });
            });
            
            busboy.on('finish', () => {
                Promise.all([fileUploaded, metainfoUploaded]).then(results => {
                    let filename = results[0];
                    let metainfo: PictureMetainfo = results[1];
                    PictureService.CreatePictureMetainfo(<IPicture>{ 
                        title: metainfo.title,
                        description: metainfo.description,
                        path: filename })
                    .then( pict => {
                        res.status(200).send(JSON.stringify(pict));
                    }, reason => {
                        res.status(500).send(JSON.stringify(reason));
                    });
                });
                
            });
            req.pipe(busboy);
        } catch(e) {
            console.log(e);
            res.status(400).send();
        }
    }

    protected pictures(req: Request, res: Response) {
        try {
            let picturesQuery: PicturesGetQuery = this.queryValidation<PicturesGetQuery>(req.query, PicturesQueryValidator);
            PictureService.ReadPictureMetainfoPagination(picturesQuery.pageSize, picturesQuery.pageNumber).then((value) => {
                res.status(200).send(JSON.stringify(value));
            }, error => {
                res.status(500).send(JSON.stringify(error));
            });            
            
        } catch(e) {
            console.log(e);
            res.status(400).send();
        }
    }

}