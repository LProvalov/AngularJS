import { Component, OnInit } from '@angular/core';

import { ComponentsDisplayService } from './../services/components-display.service';

@Component({
  selector: 'app-top-line',
  templateUrl: './top-line.component.html',
  styleUrls: ['./top-line.component.css']
})
export class TopLineComponent implements OnInit {

  constructor(
    public componentDisplayService: ComponentsDisplayService
  ) { }

  ngOnInit() {
  }

}
