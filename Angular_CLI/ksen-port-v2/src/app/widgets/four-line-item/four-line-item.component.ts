import { Component, OnInit, Input } from '@angular/core';
import { ProductGroup } from '../../models/productGroup';

@Component({
  selector: 'app-four-line-item',
  templateUrl: './four-line-item.component.html',
  styleUrls: ['./four-line-item.component.scss']
})
export class FourLineItemComponent implements OnInit {

  @Input() productGroups: ProductGroup[];

  constructor() { }

  ngOnInit() {
  }

  getFourProductGroups(): ProductGroup[] {
    return this.productGroups.slice(0, 4);
  }

}
