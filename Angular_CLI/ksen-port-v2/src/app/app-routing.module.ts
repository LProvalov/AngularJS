import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent, AboutComponent, ContactsComponent, 
  DeliveryComponent, BasketComponent, CatalogComponent } from './exports';
import { MainPortfolioComponent } from './components/portfolio/pages/main-portfolio/main-portfolio.component';

export const shopRouteBase = "shop";

const routes: Routes = [
  { path: '', component: MainPortfolioComponent },
  { path: 'portfolio', redirectTo: '', pathMatch: 'full'},
  { path: shopRouteBase, component: MainComponent},
  { path: shopRouteBase + '/main', redirectTo: shopRouteBase, pathMatch: 'full' },
  { path: shopRouteBase + '/about', component: AboutComponent },
  { path: shopRouteBase + '/contacts', component: ContactsComponent },
  { path: shopRouteBase + '/delivery', component: DeliveryComponent },
  { path: shopRouteBase + '/basket', component: BasketComponent },
  { path: shopRouteBase + '/catalog', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
