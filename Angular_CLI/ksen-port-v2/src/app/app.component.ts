import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private location: Location
  ) { }

  public isMainRouteVisible(): boolean {
    return this.location.path() === "";
  }
}
