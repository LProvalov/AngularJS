import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


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

import { HttpService } from './services/network/http.service';
import { ProductDataProviderToken } from './dataproviders/products/iproduct.dataprovider';
import { ProductsDataProvider } from './dataproviders/products/products.dataprovider';
import { MainPortfolioComponent } from './components/portfolio/pages/main-portfolio/main-portfolio.component';
import { PortHeaderComponent } from './components/portfolio/widgets/port-header/port-header.component';
import { PortFooterComponent } from './components/portfolio/widgets/port-footer/port-footer.component';

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
    CarouselItemComponent,
    MainPortfolioComponent,
    PortHeaderComponent,
    PortFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule
  ],
  providers: [
    HttpService,
    { provide: ProductDataProviderToken, useClass: ProductsDataProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
