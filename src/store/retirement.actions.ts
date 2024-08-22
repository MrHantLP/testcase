import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RetirementInterface } from '../services/retirement.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const RetirementActions = createActionGroup({
  source: 'Retirement',
  events: {
    'Load Retirements': emptyProps(),
    'Load Retirements Success': props<{ data: RetirementInterface }>(),
    'Load Retirements Failure': props<{ error: HttpErrorResponse }>(),
  },
});
