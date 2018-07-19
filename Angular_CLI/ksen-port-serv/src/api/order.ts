import { Application, Request, Response } from "express";
import { ApiBase } from "./apiBase";
import { PaginationValidator, IdValidator } from "./validators/commonValidator";
import { service as ProductService } from "../services/productService";

export class OrderApi extends ApiBase {
    public static create(app: Application) {
        app.post(ApiBase.apiUrl + '/order', (req: Request, res: Response) => {
            new OrderApi().orderPost(req, res);
        });
    }

    constructor() {
        super();
    }

    protected orderPost(req: Request, res: Response) {
        try {
            console.log(req.body);
        } catch(e) {
            console.log(JSON.stringify(e));
            res.status(505).send('Order post error');
        }
    }
}