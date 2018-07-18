import { Component, OnInit } from '@angular/core';

import { ComponentsDisplayService } from './../../../exports';

@Component({
  selector: 'app-top-line',
  templateUrl: './top-line.component.html',
  styleUrls: ['./top-line.component.scss']
})
export class TopLineComponent implements OnInit {

  constructor(
    public componentDisplayService: ComponentsDisplayService
  ) { }

  ngOnInit() {
  }

}
