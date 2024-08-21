import { createSelector, createFeatureSelector } from '@ngrx/store';


export const selectCount = createFeatureSelector<number>('count');


export const getCurrentCount = createSelector(
    selectCount,
    (count) => count
  );