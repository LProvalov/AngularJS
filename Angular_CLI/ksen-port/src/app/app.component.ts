import { Component } from '@angular/core';
import { ArtWork } from './models/allmodels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  artworks: ArtWork[] = ARTWORKS;
  title: string = 'Ksen Portfolio';
  selectedArtwork: ArtWork;

  onSelect(artwork: ArtWork): void {
    if(artwork !== this.selectedArtwork) {
      this.selectedArtwork = artwork;
    } else 
    this.selectedArtwork = null;
  }
}

const ARTWORKS: ArtWork[] = [
  { id: 11, title: 'Flower' },
  { id: 12, title: 'Pot' },
  { id: 13, title: 'Flower 2' },
  { id: 14, title: 'Bus stop' },
  { id: 15, title: 'Women face' },
  { id: 16, title: 'Old man' },
  { id: 17, title: 'Glass of absent' },
  { id: 18, title: 'Chily' },
  { id: 19, title: 'Chily #2' },
  { id: 20, title: 'Draft #1' }
];