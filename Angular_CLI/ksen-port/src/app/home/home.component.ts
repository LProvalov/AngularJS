import { Component, OnInit } from '@angular/core';
import { ArtworkService } from './../artwork.service';
import { ArtWork } from './../models/allmodels';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ArtworkService ] 
})
export class HomeComponent implements OnInit {

  title: string = 'KsenPort';
  artworks: ArtWork[] = [];

  constructor( private artworkService: ArtworkService ) { }

  ngOnInit() {
    this.getPartOfArtworks();
  }

  getPartOfArtworks(): void {
    this.artworkService.getArtworksAsync().then(artworks => {
      this.artworks = artworks.slice(1, 5);
    });
  }

  isArtworksFilled(): boolean {
    return this.artworks.length > 0;
  }
}
