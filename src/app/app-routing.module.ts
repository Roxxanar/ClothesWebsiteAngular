import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPageComponent } from './new-page/new-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ClothingPageComponent } from './clothing-page/clothing-page.component';

//import routeConfig from './routes';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent }, // Default route
  { path: 'home-page', component: HomePageComponent },
  { path: 'new-page', component: NewPageComponent },
  { path: 'faq-page', component: FaqPageComponent },
  { path: 'clothing-page', component: ClothingPageComponent},
  { path: '**', redirectTo: 'home-page', pathMatch: 'full' } // Change with error component

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }



