import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/models';
import { BasketService } from '../../services/basket.service';

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
    return this.item.isLabelVisible;
  }

  getLabelText(): string {
    return this.item.labelText;
  }

  onBasketClick(): void {
    this.basketService.insertInBasket(this.item.id);
  }

  isInBasket(): boolean {
    if (this.item) return this.basketService.isInBasketList(this.item.id);
    return false;
  }
}
