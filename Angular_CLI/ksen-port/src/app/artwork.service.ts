import { Injectable } from '@angular/core';
import { ArtWork } from './models/artwork';

const ARTWORKS: ArtWork[] = [
  { id: 11, title: 'Flower', src: '' },
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

@Injectable()
export class ArtworkService {

  constructor() { }

  getArtworks(): ArtWork[] {
    return ARTWORKS;
  }

  getArtworksAsync(): Promise<ArtWork[]> {
    return new Promise((resolve: Function, reject: Function) => {
      setTimeout(function() {
        resolve(ARTWORKS);
      }, 1000);
    });
  }

  getLastArtworks(count: number): Promise<ArtWork[]> {
    return new Promise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        resolve(ARTWORKS.slice(ARTWORKS.length - count, ARTWORKS.length));
      }, 1000);
    });
  }
  getArtwork(id: number): Promise<ArtWork> {
    return this.getArtworksAsync()
      .then( artworks => artworks.find(artwork => artwork.id === id));
  }
}

