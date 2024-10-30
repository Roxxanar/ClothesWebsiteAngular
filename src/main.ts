import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { AppComponent } from './app/app.component';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig), provideAnimations()],
}).catch((err) => console.error(err));


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
