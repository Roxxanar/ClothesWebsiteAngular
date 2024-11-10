import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NewPageComponent } from './new-page/new-page.component';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClothingPageComponent } from './clothing-page/clothing-page.component';

import { ClothingService } from './clothing-page/clothing.service';
import { FormsModule } from '@angular/forms';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { DialogLoggedComponent } from './dialog-logged/dialog-logged.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NewPageComponent,
    SalesPageComponent,
    FaqPageComponent,
    DetailsComponent,
    HomePageComponent,
    ClothingPageComponent,
    DialogFormComponent,
    DialogLoggedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ClothingService],
  bootstrap: [AppComponent]
})


export class AppModule { }
