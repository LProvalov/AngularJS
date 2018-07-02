import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as Config from 'config';

var appConfig: any = Config.get('Application');
var path = require('path');

export class IndexRoute extends BaseRoute {
    public static create(router: Router) {
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
        router.get("/exception", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().exception(req, res, next);
        });
    }

    constructor() {
        super();
    }

    public index(req: Request, res: Response, next: NextFunction) {
        this.title = "Index";

        let options: Object = {
            "message": "hello world"
        };
        let indexFile = path.join(appConfig.clientDir + '/index.html');
        res.sendFile(indexFile);
    }

    public exception(req: Request, res: Response, next: NextFunction) {
        throw { ErrorMsg: "Not implemented" };
    }
}