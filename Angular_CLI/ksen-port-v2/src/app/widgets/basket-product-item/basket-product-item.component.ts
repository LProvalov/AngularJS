import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { IProduct } from './../../models/models';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket-product-item',
  templateUrl: './basket-product-item.component.html',
  styleUrls: ['./basket-product-item.component.scss']
})
export class BasketProductItemComponent implements OnInit {

  public title: string;
  public description: string;
  public price: string;

  @Input() count: number;
  @Input() id: number;

  constructor(
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit() {
    this.productService.getProduct(this.id).subscribe((product: IProduct) => {
      this.title = product.title;
      this.description = product.description;
      this.price = product.price + "Руб.";
    });
  }

  onIncrease(productId: number): void {
    this.basketService.increaseProductInBasket(productId);
  }

  onDescrease(productId: number): void {
    this.basketService.decreaseProductInBasket(productId);
  }

}
