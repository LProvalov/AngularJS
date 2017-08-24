import { HomeComponent } from './home/home.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtWorkDetailComponent } from './art-work-detail/art-work-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artworks', component: ArtworksComponent },
  { path: 'artworks/:id', component: ArtWorkDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
