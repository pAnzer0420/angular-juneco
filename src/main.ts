import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app-routes';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule), provideRouter(appRoutes)],
});
