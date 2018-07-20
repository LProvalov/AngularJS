import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product, CombinedProduct, IProduct } from './../models/models';
import { PRODUCTS, PRODUCT_GROUP } from './../products';
import { ProductGroup } from '../models/productGroup';
import { ProductsDataProviderToken, ProductsDataProvider } from '../exports';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(ProductsDataProviderToken) private productsDataProvider: ProductsDataProvider ) { 

  }

  getProducts(): Observable<IProduct[]> {
    return of(PRODUCTS);
  }

  getProductGroups(): Observable<ProductGroup[]> {
    return of(PRODUCT_GROUP);
  }

  getProduct(id: number): Observable<IProduct> {
    return of(PRODUCTS.find(product => product.id == id));
  }

  async getProductDetails(id: number): Promise<IProduct> {
    return new Promise<IProduct>((resolve, reject) => {
      var details = PRODUCTS.find(product => product.id == id);
      if (details) resolve(details);
    });
  }
}
