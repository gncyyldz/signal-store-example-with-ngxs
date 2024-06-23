import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStates, provideStore } from '@ngxs/store';
import { CounterState } from './states/counter.state';
import { ABCState } from './states/abc.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideStates([CounterState, ABCState])
  ]
};
