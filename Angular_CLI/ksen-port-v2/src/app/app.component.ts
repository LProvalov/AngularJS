import { Component } from '@angular/core';
import { PageRoutingService } from './services/page-routing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  constructor(private pageRoutingService: PageRoutingService) { 
    
  }

  isPortfolioPage(): boolean {
    return this.pageRoutingService.isPortfolioPage();
  }
}
