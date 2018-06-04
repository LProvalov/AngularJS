import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

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
import { FourLineItemComponent } from './widgets/four-line-item/four-line-item.component';
import { SmallItemComponent } from './widgets/small-item/small-item.component';

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
    FourLineItemComponent,
    SmallItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }