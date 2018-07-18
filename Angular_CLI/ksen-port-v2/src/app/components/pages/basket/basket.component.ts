import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, CombinedProduct, IProduct, BasketProduct } from './../../../models/models';
import { BasketService } from './../../../exports';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  private deliveryDisabled = true;
  private paymentDisabled = true;
  @ViewChild('ordertabset') tabset: NgbTabset;

  constructor(
    
  ) { }

  ngOnInit() {

  }

  nextStage(): void {
    if(this.deliveryDisabled) {
      this.deliveryDisabled = false;
      this.tabset.select("deliveryid");
    }
    else if (this.paymentDisabled) {
      this.paymentDisabled = false;
      this.tabset.select("paymentsid");
    }
  }
}
