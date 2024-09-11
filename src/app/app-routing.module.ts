import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPageComponent } from './new-page/new-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';

//import { AppComponent } from './app.component';
import routeConfig from './routes';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [

  { path: 'homepage', component: HomePageComponent },
  { path: 'newpage', component: NewPageComponent },
  { path: 'faqpage', component: FaqPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})


export class AppRoutingModule { }



