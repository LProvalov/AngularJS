import { Component, OnInit } from '@angular/core';
import { ArtWork } from './../models/allmodels';
import { ArtworkService } from './../artwork.service';
import { LoadingNotifycationService } from './../loading-notifycation.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {

  constructor(
    private artworkService: ArtworkService,
    private loadingNotifycationeService: LoadingNotifycationService
  ) { }

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
    this.loadingNotifycationeService.turnMessageShown("Loading artworks...");
    this.artworkService.getArtworksAsync().then(artworks => {
      this.artworks = artworks;
      this.loadingNotifycationeService.turnMessageShown("");
    });
  }

  isArtworksFilled(): boolean {
    return this.artworks.length > 0;
  }
}
