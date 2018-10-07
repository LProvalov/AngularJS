import { Injectable } from "@angular/core";
import { RequestOptionsArgs, Response } from "@angular/http";
import { Product } from "../../models/models";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { BaseDataProvider } from "../base.dataprovider";
import { HttpService } from "./../../exports";
import { IProductDataProvider } from "./iproduct.dataprovider";

@Injectable()
export class ProductsDataProvider extends BaseDataProvider implements IProductDataProvider {

    constructor(
        private httpService: HttpService
    ) {
        super();
    }

    getListOfProducts(pageSize: number, pageNumber: number): Observable<Product[]> {
        let options = this.getAuthOptions();
        options = this.addProductsListOptions(options, pageSize, pageNumber);
        return this.httpService.get(this.getApiUrl(`products`), options)
            .map((response: any) => {
                console.log(`MAP: ${JSON.stringify(response)}`);
                console.log(`${JSON.stringify( response.body as Product[])}`);
                return response.body as Product[];
            })
            .do((response: any) => {
                console.log(`DO: ${JSON.stringify(response)}`);
                response;
            },
                (error: Response) => {
                    // TODO: handle http error
                    Observable.throw(this.getResponseBody(error));
                });
    }

    getListOfProductsForGroup(pageSize: number, pageNumber: number): Observable<Product[]> {
        return null;
    }

    private addProductsListOptions(options: RequestOptionsArgs, pageSize: number, pageNumber: number): RequestOptionsArgs {
        if (pageSize > 0 && pageNumber >= 1) {
            options.params = {
                'pageSize': pageSize,
                'pageNumber': pageNumber
            }
        }
        return options;
    }
}