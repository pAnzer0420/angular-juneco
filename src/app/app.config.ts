import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const appConfig = {
  providers: [importProvidersFrom(HttpClientModule), provideRouter(routes)],
};
