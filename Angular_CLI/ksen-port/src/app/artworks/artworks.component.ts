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

  async ngOnInit(): Promise<void> {
    this.loadingNotifycationeService.turnOnMessageShown("Loading artworks...");
    await this.getArtworks();
    this.loadingNotifycationeService.turnOffMessageShown();
  }

  artworks: ArtWork[] = [];
  selectedArtwork: ArtWork;

  onSelect(artwork: ArtWork): void {
    if(artwork !== this.selectedArtwork) {
      this.selectedArtwork = artwork;
    } else {
      this.selectedArtwork = null;
    }
  }

  async getArtworks(): Promise<void> {
    this.artworkService.getArtworksPageAsync(1, 5);
    return this.artworkService.getArtworksAsync().then(artworks => {
      this.artworks = artworks;
    });
  }

  isArtworksFilled(): boolean {
    return this.artworks.length > 0;
  }
}
