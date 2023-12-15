import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MarketplaceItemListComponent } from './marketplace/marketplace-item-list/marketplace-item-list.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketplaceComponent,
    MarketplaceItemListComponent,
    ObservableComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
