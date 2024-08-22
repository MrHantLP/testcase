import { createFeature, createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { RetirementInterface } from '../services/retirement.interface';
import { RetirementActions } from './retirement.actions';

export const retirementFeatureKey = 'retirement';

export interface RetirementState {
  data?: RetirementInterface;
  isLoading: boolean;
  isUpdating: boolean;
  error?: HttpErrorResponse;
}

export const initialState: RetirementState = {
  data: undefined,
  isLoading: false,
  isUpdating: false,
  error: undefined,
};

export const retirementReducer = createReducer(
  initialState,
  on(RetirementActions.loadRetirements, state => ({
    ...state,
    isLoading: true,
  })),
  on(
    RetirementActions.loadRetirementsFailure,
    (state: RetirementState, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  ),
  on(
    RetirementActions.loadRetirementsSuccess,
    (state: RetirementState, { data }) => ({
      ...state,
      isLoading: false,
      data,
    })
  )
);
