import { createSelector, createFeatureSelector } from '@ngrx/store';

 export interface AppState {
  count: number;
  history: number[];
}



// Select the entire state for counter and history
export const selectAppState = createFeatureSelector<AppState>('appState');

// Selector for the count
export const selectCount = createSelector(
  selectAppState,
  (state) => state.count
);

// Selector for the history
export const selectHistory = createSelector(
  selectAppState,
  (state) => state.history
);