import { BaseEndpointDataProvider } from "../base-endpoint.dataprovider";
import { ProductsDataProvider } from "./products.dataprovider";
import { HttpService } from "../../services/network/http.service";
import { Injectable } from "@angular/core";
import { Product } from "../../models/models";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsEndpointDataProvider extends BaseEndpointDataProvider implements ProductsDataProvider {

    constructor(
        private httpService: HttpService
    ) {
        super();
    }

    getListOfProducts(): Observable<Product> {
        return null;
    }
}