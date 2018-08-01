import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product, CombinedProduct, IProduct } from './../models/models';
import { PRODUCTS, PRODUCT_GROUP } from './../products';
import { ProductGroup } from '../models/productGroup';
import { IProductDataProvider, ProductDataProviderToken } from '../dataproviders/products/iproduct.dataprovider';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(ProductDataProviderToken) private productsDataProvider: IProductDataProvider) {

  }

  getProducts(pageSize: number, pageNumber: number): Observable<IProduct[]> {
    return this.productsDataProvider.getListOfProducts(pageSize, pageNumber).map((products: Product[]) => {
      console.log(`${JSON.stringify(products)}`);
      let res:  IProduct[] = [];
      return res;
    });
    //return of(PRODUCTS);
  }

  getProductGroups(): Observable<ProductGroup[]> {
    return of(PRODUCT_GROUP);
  }

  getProduct(id: string): Observable<IProduct> {
    return of(PRODUCTS.find(product => product._id == id));
  }

  async getProductDetails(id: string): Promise<IProduct> {
    return new Promise<IProduct>((resolve, reject) => {
      var details = PRODUCTS.find(product => product._id == id);
      if (details) resolve(details);
    });
  }
}
