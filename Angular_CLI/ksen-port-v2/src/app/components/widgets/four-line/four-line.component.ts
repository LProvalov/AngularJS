import { Component, OnInit, Input } from '@angular/core';
import { ProductGroup } from '../../../models/productGroup';

@Component({
  selector: 'app-four-line',
  templateUrl: './four-line.component.html',
  styleUrls: ['./four-line.component.scss']
})
export class FourLineComponent implements OnInit {

  @Input() productGroups: ProductGroup[];

  constructor() { }

  ngOnInit() {
  }

  getFourProductGroups(): ProductGroup[] {
    return this.productGroups.slice(0, 4);
  }

}
