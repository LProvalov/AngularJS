import { Component, OnInit, Input } from '@angular/core';
import { CombinedProduct } from './../../../models/combinedProduct';
import { Product } from './../../../models/product';

import { BasketService } from './../../../exports';

@Component({
  selector: 'app-big-left-img-item',
  templateUrl: './big-left-img-item.component.html',
  styleUrls: ['./big-left-img-item.component.scss']
})
export class BigLeftImgItemComponent implements OnInit {

  constructor(
    private basketService: BasketService
  ) { }

  @Input() product: Product | CombinedProduct;

  ngOnInit() {
  }

  isCombinedProduct(): boolean {
    return (this.product instanceof CombinedProduct);
  }

  getCombinedProductDescription(): String[] {
    return (this.product as CombinedProduct).compositionDescription;
  }

  onBasketClick() {
    this.basketService.insertInBasket(this.product._id);
  }

  isInBasket(): boolean {
    if (this.product) return this.basketService.isInBasketList(this.product._id);
    return false;
  }

  toBasketLinkClick() {
    
  }

}
