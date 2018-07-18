import { BaseEndpointDataProvider } from "../base-endpoint.dataprovider";
import { ProductsDataProvider } from "./products.dataprovider";
import { HttpService } from "../../services/network/http.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsEndpointDataProvider extends BaseEndpointDataProvider implements ProductsDataProvider {

    constructor(
        private httpService: HttpService
    ) {
        super();
    }
}