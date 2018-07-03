import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TopLineComponent } from './top-line/top-line.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FooterComponent } from './footer/footer.component';
import { BasketComponent } from './basket/basket.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { BigLeftImgItemComponent } from './widgets/big-left-img-item/big-left-img-item.component';
import { BasketLableComponent } from './widgets/basket-lable/basket-lable.component';
import { BasketProductItemComponent } from './widgets/basket-product-item/basket-product-item.component';
import { BasketProductListComponent } from './widgets/basket-product-list/basket-product-list.component';
import { FourLineComponent } from './widgets/four-line/four-line.component';
import { GroupItemComponent } from './widgets/group-item/group-item.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FourLineListComponent } from './widgets/four-line-list/four-line-list.component';
import { MediumItemComponent } from './widgets/medium-item/medium-item.component';
import { CarouselComponent } from './widgets/carousel/carousel.component';
import { CarouselItemComponent } from './widgets/carousel/carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactsComponent,
    TopLineComponent,
    DeliveryComponent,
    FooterComponent,
    BasketComponent,
    MainNavigationComponent,
    BigLeftImgItemComponent,
    BasketLableComponent,
    BasketProductItemComponent,
    BasketProductListComponent,
    FourLineComponent,
    GroupItemComponent,
    ProductGroupComponent,
    CatalogComponent,
    FourLineListComponent,
    MediumItemComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
