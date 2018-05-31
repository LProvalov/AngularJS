import { Component, OnInit } from '@angular/core';
import { CombinedProduct, Product, IProduct } from './../models/models';

import { ProductService } from './../services/product.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products: (IProduct)[];
  mainProduct: CombinedProduct;

  ngOnInit() {
    this.productService.getProduct(11).subscribe(item => {
      if(item != null) {
        this.mainProduct = item as CombinedProduct;
      } else {
        this.mainProduct = null;
      }
    });

    this.productService.getProducts().subscribe(products => {
      this.products = products;
      
    });
  }

}
