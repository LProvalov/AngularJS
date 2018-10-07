import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './../../../models/models';
import { BasketService, ProductService } from './../../../exports';

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
  @Input() id: string;

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

  onIncrease(productId: string): void {
    this.basketService.increaseProductInBasket(productId);
  }

  onDescrease(productId: string): void {
    this.basketService.decreaseProductInBasket(productId);
  }

}
