import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Product, CombinedProduct, IProduct } from './../models/models';
import { PRODUCTS } from './../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return of(PRODUCTS);
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
