import { Component, OnInit, Input } from '@angular/core';
import { ProductGroup } from '../../../models/productGroup';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent implements OnInit {

  @Input() productGroup: ProductGroup;

  constructor() { }

  ngOnInit() {
  }

  getProductGroupPriceStr(): string {
    return `От ${this.productGroup.price} руб.`;
  }

}
