import { Component, OnInit } from '@angular/core';

import { ComponentsDisplayService } from './../services/components-display.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public componentsDisplayService: ComponentsDisplayService
  ) { }

  ngOnInit() {
  }

}
