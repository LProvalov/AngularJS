import { Component, OnInit } from '@angular/core';
import { BasketService } from './../../../exports';
import { BasketProduct } from './../../../models/models';

@Component({
  selector: 'app-basket-product-list',
  templateUrl: './basket-product-list.component.html',
  styleUrls: ['./basket-product-list.component.scss']
})
export class BasketProductListComponent implements OnInit {

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
  }
  
  getBasketList(): BasketProduct[] {
    return this.basketService.getBasketList();
  }

  getTotalPrise(): number {
    return this.basketService.getBasketPrice();
  }
}
