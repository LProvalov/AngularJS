import { Component, OnInit } from '@angular/core';
import { BasketService } from './../../services/basket.service';


@Component({
  selector: 'app-basket-lable',
  templateUrl: './basket-lable.component.html',
  styleUrls: ['./basket-lable.component.scss']
})
export class BasketLableComponent implements OnInit {

  public basketCount: number;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
    
  }

  getBasketCount(): number {
    return this.basketService.basketListCount();
  }
}
