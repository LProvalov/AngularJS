import { Component, OnInit, Input } from '@angular/core';
import { CarouselModel } from './../../models/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() items: CarouselModel[];

  constructor() { }

  ngOnInit() {
  }

}
