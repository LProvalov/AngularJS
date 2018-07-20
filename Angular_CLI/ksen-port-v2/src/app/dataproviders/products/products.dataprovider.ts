import { InjectionToken } from "@angular/core";
import { Product } from "../../models/models";
import { Observable } from 'rxjs/Observable';

export const ProductsDataProviderToken = new InjectionToken<ProductsDataProvider>('./dataproviders/products/products.dataprovider');

export interface ProductsDataProvider {
    getListOfProducts(): Observable<Product>;
}