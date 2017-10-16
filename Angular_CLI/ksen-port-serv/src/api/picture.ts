import { Application, Request, Response } from "express";
import * as Busboy from 'busboy';
import { ApiBase } from "./apiBase";
import {
    PictureMetainfo, PictureGetQuery, PicturesGetQuery, PictureUpdateMetainfo,
    validatorPicture as PictureQueryValidator,
    validatorPictures as PicturesQueryValidator,
    validatorPictureMetainfo as PictureMetainfoValidator,
    validatorPictureUpdateMetainfo as PictureUpdateMetainfoValidator
} from "./../models/pictureApi";
import { service as PictureService } from "./../services/pictureService";
import { IPicture } from "./../models/picture";

export class PictureApi extends ApiBase {

    public static create(app: Application) {
        // GET: apibase/picture?id={id}
        app.get(`${ApiBase.apiUrl}/picture`, (req: Request, res: Response) => {
            new PictureApi().picture(req, res, true);
        });

        // GET: apibase/picture/{id}
        app.get(`${ApiBase.apiUrl}/picture/:id`, (req: Request, res: Response) => {
            new PictureApi().picture(req, res);
        });

        // GET: apibase/pictures?pageSize={5}&pageNumber={1}
        app.get(`${ApiBase.apiUrl}/pictures`, (req: Request, res: Response) => {
            new PictureApi().pictures(req, res);
        });

        // POST: apibase/picture/ ...
        // multipart request
        app.post(`${ApiBase.apiUrl}/picture`, (req: Request, res: Response) => {
            new PictureApi().picturePost(req, res);
        });

        // DELETE: apibase/picture/{id}
        app.delete(`${ApiBase.apiUrl}/picture/:id`, (req: Request, res: Response) => {
            new PictureApi().deletePicture(req, res);
        });
    }

    constructor() {
        super();
    }

    protected picture(req: Request, res: Response, isQuery?: boolean) {
        try {
            let pictureQuery: PictureGetQuery = this.queryValidation<PictureGetQuery>(isQuery ? req.query : req.params, PictureQueryValidator);
            PictureService.ReadPictureMetainfo(pictureQuery.id).then((pictureModel) => {
                if (pictureModel) {
                    res.sendFile(pictureModel.path);
                }
                else {
                    res.status(400).send(`Picture with this id doesn't found.`);
                }
            }, (reason) => {
                res.status(400).send(JSON.stringify(reason));
            });
        } catch (e) {
            console.log(e);
            res.status(500).send();
        }
    }

    protected picturePost(req: Request, res: Response) {
        try {
            var busboy = new Busboy({ headers: req.headers });
            var fileUploaded = new Promise<string>((resolve, reject) => {
                busboy.on('file', (fildname: string, file: NodeJS.ReadableStream, filename: string,
                    encoding: string, mimetype: string) => {
                    let fileName: string = `${Date.now()}_${filename}`;
                    PictureService.SavePictureFileToLocal(file, fileName).then((fullFilename) => {
                        resolve(fullFilename);
                    });
                });
            });
            var metainfoUploaded = new Promise<PictureMetainfo>((resolve, reject) => {
                busboy.on('field', (fieldname: string, val: any, fieldnameTruncated: boolean,
                    valTruncated: boolean, encoding: string, mimetype: string) => {
                    if (fieldname != "metainfo") throw new Error("Wrong field name in request.");
                    let metainfo: PictureMetainfo = this.queryValidation<PictureMetainfo>(JSON.parse(val), PictureMetainfoValidator);
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
                        path: filename
                    })
                        .then(pict => {
                            res.status(200).send(JSON.stringify(pict));
                        }, reason => {
                            res.status(500).send(JSON.stringify(reason));
                        });
                });

            });
            req.pipe(busboy);
        } catch (e) {
            console.log(JSON.stringify(e));
            console.log(e);
            req.unpipe(busboy);
            res.status(500).send('Upload error occured');
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

        } catch (e) {
            console.log(e);
            res.status(500).send();
        }
    }

    protected async deletePicture(req: Request, res: Response) {
        try {
            let pictureId = req.params.id as string;
            let picModel = await PictureService.ReadPictureMetainfo(pictureId);
            if (picModel) {
                PictureService.DeletePicture(picModel);
                res.status(200).send();
            } else {
                res.status(400).send();
            }
        } catch (e) {
            console.log(e);
            res.status(500).send();
        }
    }
}