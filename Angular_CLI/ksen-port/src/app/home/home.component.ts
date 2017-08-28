import { Component, OnInit } from '@angular/core';
import { ArtworkService } from './../artwork.service';
import { ArtWork } from './../models/allmodels';
import { LoadingNotifycationService } from './../loading-notifycation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artworks: ArtWork[] = [];

  constructor( 
    private artworkService: ArtworkService,
    private loadingNotifycationService: LoadingNotifycationService 
  ) { }

  ngOnInit() {
    this.getPartOfArtworks();
  }

  getPartOfArtworks(): void {
    this.loadingNotifycationService.turnMessageShown("Loading home...");
    this.artworkService.getArtworksAsync().then(artworks => {
      this.artworks = artworks.slice(1, 5);
      this.loadingNotifycationService.turnMessageShown("");
    });
  }

  isArtworksFilled(): boolean {
    return this.artworks.length > 0;
  }
}
