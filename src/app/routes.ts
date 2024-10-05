import { HomePageComponent } from './home-page/home-page.component';
import {NewPageComponent} from 'src/app/new-page/new-page.component';
import {SalesPageComponent} from 'src/app/sales-page/sales-page.component';
import {ClothingPageComponent} from 'src/app/clothing-page/clothing-page.component';
import {FaqPageComponent} from 'src/app/faq-page/faq-page.component';

import {Routes} from '@angular/router';
import { DetailsComponent } from './details/details.component';


const routeConfig: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent,
    title: 'Home page',
  },

  {
    path: 'new-page',
    component: NewPageComponent,
    title: 'New page',
  },

  {
    path: 'sales-page',
    component: SalesPageComponent,
    title: 'Sales page',
  },

  {
    path: 'clothing-page',
    component: ClothingPageComponent,
    title: 'Clothing page',
  },

  {
    path: 'faq-page',
    component: FaqPageComponent,
    title: 'Faq page',
  },

  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
export default routeConfig;
