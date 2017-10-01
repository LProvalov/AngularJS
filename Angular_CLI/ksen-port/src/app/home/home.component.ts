import { Component, OnInit } from '@angular/core';
import { ArtworkService } from './../artwork.service';
import { ArtWork, Layout } from './../models/allmodels';
import { LoadingNotifycationService } from './../loading-notifycation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artworks: ArtWork[] = [];
  layouts: Layout[] = [];

  constructor( 
    private artworkService: ArtworkService,
    private loadingNotifycationService: LoadingNotifycationService 
  ) { }

  async ngOnInit(): Promise<void> {
    this.loadingNotifycationService.turnOnMessageShown("Loading home...");
    this.artworks = await this.getLastArtworks(8);
    this.layouts = await this.getLastLayouts(3);
    this.loadingNotifycationService.turnOffMessageShown();
  }

  async getPartOfArtworks(): Promise<void> {
    return this.artworkService.getArtworksAsync().then(artworks => {
      this.artworks = artworks.slice(1, 5);
    });
  }

  async getLastArtworks(count: number): Promise<ArtWork[]> {
    return await this.artworkService.getLastArtworks(count);
  }

  async getLastLayouts(count: number): Promise<Layout[]> {
    return await this.artworkService.getLastLayoutsAsync(count);
  }

  isArtworksFilled(): boolean {
    return this.artworks.length > 0;
  }
}
