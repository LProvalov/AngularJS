import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtWorkDetailComponent } from './art-work-detail/art-work-detail.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtworkService } from './artwork.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtWorkDetailComponent,
    ArtworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ArtworkService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
