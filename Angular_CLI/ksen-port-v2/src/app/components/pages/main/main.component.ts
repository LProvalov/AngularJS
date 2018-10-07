import { ProductService } from './../../../exports';

import { Component, OnInit } from '@angular/core';
import { CombinedProduct, Product, IProduct, CarouselModel } from './../../../models/models';

import * as _ from 'lodash';
import { ProductGroup } from './../../../models/productGroup';

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
  productGroups: ProductGroup[];
  carouselItems: CarouselModel[] = [
    {
      title: "Наборы для акварели",
      description: "Кисти, краски и бумага, всё что нужно чтобы начать творить!",
      src: "",
      route: null
    },
    {
      title: "Каллиграфия",
      description: "Очень просто начать заниматься чем то действительно прекрасным!",
      src: "",
      route: null
    },
    {
      title: "Дизайн решает!",
      description: "Дизайнерские товары по самым доступным ценам!",
      src: "",
      route: null
    }
  ];

  ngOnInit() {
    this.productService.getProduct("").subscribe(item => {
      if (item != null) {
        this.mainProduct = item as CombinedProduct;
      } else {
        this.mainProduct = null;
      }
    });

    this.productService.getProducts(10, 1).subscribe(products => {
      console.log(`Products: ${JSON.stringify(products)}`);
      this.products = products;
    });

    this.productService.getProductGroups().subscribe(pGs => {
      this.productGroups = pGs;
    });
  }

}
