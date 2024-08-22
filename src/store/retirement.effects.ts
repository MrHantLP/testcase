import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RetirementActions } from './retirement.actions';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({ providedIn: 'root' })
export class RetirementEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly dataService$: DataService = inject(DataService);

  loadRetirement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RetirementActions.loadRetirements),
      switchMap(() =>
        this.dataService$.getRetirement().pipe(
          map(data => RetirementActions.loadRetirementsSuccess({ data })),
          catchError(error =>
            of(RetirementActions.loadRetirementsFailure({ error }))
          )
        )
      )
    )
  );
}
