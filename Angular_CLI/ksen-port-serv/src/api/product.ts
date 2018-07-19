import { Application, Request, Response } from "express";
import { ApiBase } from "./apiBase";
import { PaginationValidator, IdValidator } from "./validators/commonValidator";
import { service as ProductService } from "../services/productService";

export class ProductsGetQuery {
    pageNumber: number;
    pageSize: number;
}

export class ProductGetQuery {
    id: string;
}

export class ProductApi extends ApiBase {

    public static create(app: Application) {
        // GET: apibase/products?pageSize={5}&pageNumber={1}
        app.get(ApiBase.apiUrl + '/products', (req: Request, res: Response) => {
            new ProductApi().products(req, res);
        });
        // GETL apibase/product/{id}
        app.get(ApiBase.apiUrl + '/product/:id', (req: Request, res: Response) => {
            new ProductApi().product(req, res);
        });
        // GET apibase/product
        app.get(`${ApiBase.apiUrl}/picture`, (req: Request, res: Response) => {
            new ProductApi().product(req, res, true);
        });
    }

    constructor() {
        super();
    }

    protected products(req: Request, res: Response) {
        try {
            let productsQuery: ProductsGetQuery =
                this.queryValidation<ProductsGetQuery>(req.query, PaginationValidator);
            ProductService.ReadProductPagination(productsQuery.pageSize, productsQuery.pageNumber).then((products) => {
                res.status(200).send(JSON.stringify(products));
            }, error => {
                res.status(500).send(JSON.stringify(error));
            })
        } catch (e) {
            console.log(e);
            res.status(505).send();
        }
    }

    protected product(req: Request, res: Response, isQuery?: boolean) {
        try {
            let productQuery: ProductGetQuery =
                this.queryValidation<ProductGetQuery>(isQuery ? req.query : req.params, IdValidator);
            ProductService.ReadProduct(productQuery.id).then((product) => {
                res.status(200).send(JSON.stringify(product));
            }, error => {
                res.status(500).send(JSON.stringify(error));
            });
        } catch (e) {
            console.log(e);
            res.status(505).send();
        }
    }
}