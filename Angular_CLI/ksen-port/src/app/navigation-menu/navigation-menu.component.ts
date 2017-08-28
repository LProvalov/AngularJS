import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from './../navigation.service';
import { Page } from './../models/allmodels';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
  providers: [ Location ]
})
export class NavigationMenuComponent implements OnInit {

  constructor( 
    private navigationService: NavigationService,
    private router: Router,
    private location: Location
  ) { }

  pages: Page[];
  selectedPage: Page;

  menuClickHandler($event: any){
    let title = $event.target.text;
    this.selectedPage = this.pages.find( item => { return item.title == title; });
  }

  ngOnInit() {
    this.pages = this.navigationService.pages;
    let path: string;
    if( this.location.path() != '') {
      path = this.location.path();
    } else {
      path = this.pages[0].url;
    }    
    this.selectedPage = this.pages.find( item => { return item.url == path });
  }

}
