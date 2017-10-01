import { Injectable } from '@angular/core';

import { Page } from './models/allmodels'

@Injectable()
export class NavigationService {

  pages: Page[];

  getPublicPages(): Page[]{
    let pages: Page[] = [
      { url: "/home", title: "Home" },
      { url: "/artworks", title: "Artworks" },
      { url: "", title: "Layouts" },
      { url: "", title: "HTML"}
    ];
    return pages;
  }

  constructor() {
    this.pages = this.getPublicPages();
  }

}
