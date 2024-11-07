import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

export const appConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(RouterModule) // Importa RouterModule de esta forma
  ]
};

