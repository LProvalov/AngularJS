import { Component, OnInit } from '@angular/core';
import { ImageService } from './../../../../exports';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.imageService.getImage(1).subscribe(imageBlob => {
      console.log(imageBlob);
    });
  }

}
