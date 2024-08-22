import { createFeatureSelector, createSelector } from '@ngrx/store';
import { retirementFeatureKey, RetirementState } from './retirement.feature';

const selectRetirementState =
  createFeatureSelector<RetirementState>(retirementFeatureKey);

export const selectRetirementData = createSelector(
  selectRetirementState,
  (state: RetirementState) => state.data
);

export const isRetirementLoading = createSelector(
  selectRetirementState,
  (state: RetirementState) => state.isLoading
);
export const isRetirementUpdating = createSelector(
  selectRetirementState,
  (state: RetirementState) => state.isUpdating
);
