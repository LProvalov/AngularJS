import { Component, OnInit } from '@angular/core';
import { ArtWork } from './../models/allmodels';
import { ArtworkService } from './../artwork.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css'],
  providers: [ ArtworkService ]
})
export class ArtworkComponent implements OnInit {

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.getArtworks();
  }

  artworks: ArtWork[] = [];
    selectedArtwork: ArtWork;

  onSelect(artwork: ArtWork): void {
    if(artwork !== this.selectedArtwork) {
      this.selectedArtwork = artwork;
    } else 
    this.selectedArtwork = null;
  }

  getArtworks(): void {
    this.artworkService.getArtworksAsync().then(artworks => {
      this.artworks = artworks;
    });
  }

  isArtworksFilled(): boolean {
    return this.artworks.length > 0;
  }
}
