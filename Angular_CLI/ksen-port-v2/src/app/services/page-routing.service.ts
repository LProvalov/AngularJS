import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shopRouteBase } from './../app-routing.module';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PageRoutingService {

  constructor(private route: Router) { }

  isPortfolioPage(): boolean {
    return _.startsWith(this.route.url, shopRouteBase, 1);
  }
}
