import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPageComponent } from './new-page/new-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ClothingPageComponent } from './clothing-page/clothing-page.component';

//import { AppComponent } from './app.component';
import routeConfig from './routes';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent }, // Default route
  { path: 'homepage', component: HomePageComponent },
  { path: 'newpage', component: NewPageComponent },
  { path: 'faqpage', component: FaqPageComponent },
  { path: 'clothingpage', component: ClothingPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})


export class AppRoutingModule { }



