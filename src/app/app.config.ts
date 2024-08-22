import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { RetirementEffects } from '../store/retirement.effects';
import {
  retirementFeatureKey,
  retirementReducer,
} from '../store/retirement.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ [retirementFeatureKey]: retirementReducer }),
    provideEffects([RetirementEffects]),
  ],
};
