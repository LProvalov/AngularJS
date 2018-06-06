import { Component, OnInit, Input } from '@angular/core';
import { ProductGroup } from '../../models/productGroup';

@Component({
  selector: 'app-small-item',
  templateUrl: './small-item.component.html',
  styleUrls: ['./small-item.component.scss']
})
export class SmallItemComponent implements OnInit {

  @Input() productGroup: ProductGroup;

  constructor() { }

  ngOnInit() {
  }

  getProductGroupPriceStr(): string {
    return `От ${this.productGroup.price} руб.`;
  }

}
