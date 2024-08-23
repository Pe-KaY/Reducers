import { createAction, props } from '@ngrx/store';

export const addToHistory = createAction('[Counter] Add to History', props<{ count: number }>());
export const clearHistory = createAction('[CounterHistory] CountHistory');
