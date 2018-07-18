import { InjectionToken } from "@angular/core";

export const ProductsDataProviderToken = new InjectionToken<ProductsDataProvider>('./dataproviders/products/products.dataprovider');

export interface ProductsDataProvider {

}