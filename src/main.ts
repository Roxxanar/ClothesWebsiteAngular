import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { AppComponent } from './app/app.component';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig)],
}).catch((err) => console.error(err));


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
