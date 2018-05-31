import { Injectable } from '@angular/core';

import { Product, CombinedProduct, IProduct, BasketProduct } from './../models/models';
import { ProductService } from './product.service';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})



export class BasketService {

  productsInBasket: BasketProduct[] = [];

  constructor(
    private productService: ProductService
  ) { }

  insertInBasket(productId: number) {
    this.productService.getProduct(productId).subscribe(
      product => {
        if (product != null) {
          var basketProduct: BasketProduct = _.find(this.productsInBasket, (item: BasketProduct) => {
            return item.productId == product.id;
          });
          if (basketProduct != null) {
            this.increaseProductInBasket(basketProduct.productId);
          }
          else {
            this.productsInBasket.push(new BasketProduct(productId, 1));
          }
        }
      }
    );
  }

  increaseProductInBasket(productId: number) {
    var basketProduct: BasketProduct = _.find(this.productsInBasket, (item: BasketProduct) => {
      return item.productId == productId;
    });
    if (basketProduct != null) {
      basketProduct.count++;
    }
  }

  decreaseProductInBasket(productId: number) {
    var basketProduct: BasketProduct = _.find(this.productsInBasket, (item: BasketProduct) => {
      return item.productId == productId;
    });
    if (basketProduct != null && basketProduct.count > 0) {
      basketProduct.count--;
    }
  }

  removeFromBasket(productId: number) {
    this.productService.getProduct(productId).subscribe(
      product => {
        if (product != null) {
          _.remove(this.productsInBasket, (item: BasketProduct) => {
            return item.productId == product.id;
          });
        }
      }
    );
  }

  getBasketList(): BasketProduct[] {
    return this.productsInBasket;
  }

  isInBasketList(productId: number): boolean {
    var product = _.find(this.productsInBasket, (item: BasketProduct) => {
      return item.productId == productId;
    });
    return product != null;
  }
}
