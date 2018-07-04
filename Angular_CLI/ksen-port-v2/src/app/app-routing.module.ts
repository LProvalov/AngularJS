import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent, AboutComponent, ContactsComponent, 
  DeliveryComponent, BasketComponent, CatalogComponent } from './exports';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'catalog', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
