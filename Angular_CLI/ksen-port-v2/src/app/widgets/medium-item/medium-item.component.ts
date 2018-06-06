import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/models';

@Component({
  selector: 'app-medium-item',
  templateUrl: './medium-item.component.html',
  styleUrls: ['./medium-item.component.scss']
})
export class MediumItemComponent implements OnInit {

  @Input() item: IProduct;

  constructor() { }

  ngOnInit() {
  }

  getProductPriceStr(): string {
    return `${this.item.price} руб.`
  }

}
