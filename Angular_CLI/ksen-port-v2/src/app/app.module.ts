import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/pages/main/main.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { TopLineComponent } from './components/widgets/top-line/top-line.component';
import { DeliveryComponent } from './components/pages/delivery/delivery.component';
import { FooterComponent } from './components/widgets/footer/footer.component';
import { BasketComponent } from './components/pages/basket/basket.component';
import { MainNavigationComponent } from './components/widgets/main-navigation/main-navigation.component';
import { BigLeftImgItemComponent } from './components/widgets/big-left-img-item/big-left-img-item.component';
import { BasketLableComponent } from './components/widgets/basket-lable/basket-lable.component';
import { BasketProductItemComponent } from './components/widgets/basket-product-item/basket-product-item.component';
import { BasketProductListComponent } from './components/widgets/basket-product-list/basket-product-list.component';
import { FourLineComponent } from './components/widgets/four-line/four-line.component';
import { GroupItemComponent } from './components/widgets/group-item/group-item.component';
import { ProductGroupComponent } from './components/widgets/product-group/product-group.component';
import { CatalogComponent } from './components/widgets/catalog/catalog.component';
import { FourLineListComponent } from './components/widgets/four-line-list/four-line-list.component';
import { MediumItemComponent } from './components/widgets/medium-item/medium-item.component';
import { CarouselComponent } from './components/widgets/carousel/carousel.component';
import { CarouselItemComponent } from './components/widgets/carousel/carousel-item/carousel-item.component';

import { ProductsDataProviderToken } from './exports';
import { ProductsEndpointDataProvider } from './dataproviders/products/products-endpoint.dataprovider';

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
  providers: [
    { provide: ProductsDataProviderToken, useClass: ProductsEndpointDataProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
