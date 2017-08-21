import { Component, OnInit, Input } from '@angular/core';
import { ArtWork } from './../models/allmodels';

@Component({
  selector: 'app-art-work-detail',
  templateUrl: './art-work-detail.component.html',
  styleUrls: ['./art-work-detail.component.css']
})
export class ArtWorkDetailComponent implements OnInit {

  @Input() artwork: ArtWork;

  constructor() { }

  ngOnInit() {
  }

}
