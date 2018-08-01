import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../../models/models';
import { BasketService } from './../../../exports';

@Component({
  selector: 'app-medium-item',
  templateUrl: './medium-item.component.html',
  styleUrls: ['./medium-item.component.scss']
})
export class MediumItemComponent implements OnInit {

  @Input() item: IProduct;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
  }

  getProductPriceStr(): string {
    return `${this.item.price} руб.`
  }

  isLableVisible(): boolean {
    return this.item.label;
  }

  getLabelText(): string {
    return this.item.labelMessage;
  }

  onBasketClick(): void {
    this.basketService.insertInBasket(this.item._id);
  }

  isInBasket(): boolean {
    if (this.item) return this.basketService.isInBasketList(this.item._id);
    return false;
  }
}
