import { Application, Request, Response } from "express";
import { ApiBase } from "./apiBase";
import { PictureGetQuery, PicturesGetQuery,
    validatorPicture as PictureQueryValidator,
    validatorPictures as PicturesQueryValidator } from "./../models/pictureApi";
import { service as PictureService } from "./../services/pictureService";

export class PictureApi extends ApiBase {

    public static create(app: Application) {
        app.get(ApiBase.apiUrl + '/picture', (req: Request, res: Response) => {
            new PictureApi().picture(req, res);
        });

        app.get(ApiBase.apiUrl + '/pictures', (req: Request, res: Response) => {
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
            PictureService.PictureDetail(pictureQuery.id).then((value) =>{
                res.status(200).send(JSON.stringify(value));
            });        
        } catch (e) {
            console.log(e);
            res.status(400).send();
        }
    }

    protected picturePost(req: Request, res: Response) {
        try{
            PictureService.UploadPicture({
                title: "some title",
                description:"some description"
            }).then(result => {
                res.status(200).send(JSON.stringify(result));
            }, err => {
                res.status(500).send(JSON.stringify(err));
            });
            
        } catch(e) {
            console.log(e);
            res.status(400).send();
        }
    }

    protected pictures(req: Request, res: Response) {
        try {
            let picturesQuery: PicturesGetQuery = this.queryValidation<PicturesGetQuery>(req.query, PicturesQueryValidator);
            PictureService.GetPicture(picturesQuery.pageSize, picturesQuery.pageNumber).then((value) => {
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