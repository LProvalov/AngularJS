import { Component, OnInit } from '@angular/core';
import { Product, CombinedProduct, IProduct, BasketProduct } from './../models/models';
import { BasketService } from './../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {

  }

  getBasketList(): BasketProduct[] {
    return this.basketService.getBasketList();
  }

  onIncrease(productId: number): void {
    this.basketService.increaseProductInBasket(productId);
  }

  onDescrease(productId: number): void {
    this.basketService.decreaseProductInBasket(productId);
  }

}
