import { Injectable, InjectionToken } from "@angular/core";
import { Product } from "../../models/models";
import { Observable } from "../../../../node_modules/rxjs";

export const ProductDataProviderToken = new InjectionToken<IProductDataProvider>('./dataproviders/products/iproduct.dataprovider');

export interface IProductDataProvider {
    getListOfProducts(pageSize: number, pageNumber: number): Observable<Product[]>;
    getListOfProductsForGroup(pageSize: number, pageNumber: number): Observable<Product[]>;
}