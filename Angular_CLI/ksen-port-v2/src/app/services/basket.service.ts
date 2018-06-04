import { Injectable } from '@angular/core';

import { Product, CombinedProduct, IProduct, BasketProduct } from './../models/models';
import { ProductService } from './product.service';

import * as _ from 'lodash';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  productsInBasket: BasketProduct[] = [];

  constructor(
    private productService: ProductService
  ) {

  }

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
            this.productsInBasket.push(new BasketProduct(productId, 1, product.price));
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

  getBasketPrice(): number {
    var total: number = 0;
    _.forEach(this.productsInBasket, product => {
      total += product.price * product.count;
    });
    return total;
  }

  isInBasketList(productId: number): boolean {
    var product = _.find(this.productsInBasket, (item: BasketProduct) => {
      return item.productId == productId;
    });
    return (product != null && product.count > 0);
  }

  basketListCount(): number {
    var count: number = 0;
    this.productsInBasket.forEach(item => { if (item.count > 0) count++; });
    return count;
  }
}
