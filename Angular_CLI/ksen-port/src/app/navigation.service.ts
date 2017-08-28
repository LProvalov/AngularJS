import { Injectable } from '@angular/core';

import { Page } from './models/allmodels'

@Injectable()
export class NavigationService {

  pages: Page[];

  getPublicPages(): Page[]{
    let pages: Page[] = [
      { url: "/home", title: "Home" },
      { url: "/artworks", title: "Artworks" }
    ];
    return pages;
  }

  constructor() {
    this.pages = this.getPublicPages();
  }

}
