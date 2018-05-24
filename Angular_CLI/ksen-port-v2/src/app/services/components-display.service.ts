import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsDisplayService {

  constructor() { }

  private isFooterVisible: boolean = true;
  get FooterVisible(): boolean {
    return this.isFooterVisible;
  }
  set FooterVisible(value: boolean) {
      this.isFooterVisible = value;
  }

  private isTopLineVisible: boolean = true;
  get TopLineVisible(): boolean {
    return this.isTopLineVisible;
  }
  set TopLineVisible(value: boolean) {
    this.isTopLineVisible = value;
  }
  
}
