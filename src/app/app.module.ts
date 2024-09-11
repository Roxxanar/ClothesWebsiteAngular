import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NewPageComponent } from './new-page/new-page.component';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NewPageComponent,
    SalesPageComponent,
    FaqPageComponent,
    DetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
