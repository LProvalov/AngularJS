import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ArtWork } from './../models/allmodels';
import { ArtworkService } from './../artwork.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-art-work-detail',
  templateUrl: './art-work-detail.component.html',
  styleUrls: ['./art-work-detail.component.css']
})
export class ArtWorkDetailComponent implements OnInit {

  @Input() artwork: ArtWork;

  constructor(
    private artworkService: ArtworkService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap( (params: ParamMap ) => this.artworkService.getArtwork(+params.get('id')) )
      .subscribe(artwork => this.artwork = artwork);
  }

  goBack(): void {
    this.location.back();
  }
  
}
