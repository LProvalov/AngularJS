import { Component, OnInit, Input } from '@angular/core';
import { ArtWork } from './../models/allmodels';

@Component({
  selector: 'app-bootstrap-slider',
  templateUrl: './bootstrap-slider.component.html',
  styleUrls: ['./bootstrap-slider.component.css']
})
export class BootstrapSliderComponent implements OnInit {

  @Input() delayMs: number = 5000;

  _artworks: ArtWork[];
  @Input()
  set artworks(artworks: ArtWork[]){
    if(artworks.length > 0) {
      this._artworks = artworks;
      this.currentIndex = 0;
      this.isVisible = true;
    } else {
      this._artworks = [];
      this.isVisible = false;
    }
  }

  get artworks(): ArtWork[] {
    return this._artworks;
  }

  isVisible: boolean = false;
  currentIndex: number = -1;
  get currentArtwork(): ArtWork {
    return this.currentIndex >= 0 ? this._artworks[this.currentIndex] : null;
  };
  
  constructor() { }

  ngOnInit() {
    setInterval( () => {
      this.changeSlide();
    },
     this.delayMs);
  }
  
  changeSlide(): void {
    let length = this._artworks.length;
    if(length > 1){
      if(this.currentIndex + 1 < length) this.currentIndex++;
      else this.currentIndex = 0;
    }
  }

}
