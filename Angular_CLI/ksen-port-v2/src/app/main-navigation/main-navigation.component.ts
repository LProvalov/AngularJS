import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  public isMainRouteVisible(): boolean {
    return this.location.path() === "";
  }

}
