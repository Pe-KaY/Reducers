import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, initialValue } from './counter.actions';


const isBrowser = typeof window !== 'undefined';

// saves the initial input count value 
let initialStateBackup = 0


// checks if the browser supports local storage
const initialState = isBrowser
  ? Number(window.localStorage.getItem('count')) || 0
  : initialStateBackup;


const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    const current = state + 1;
    localStorage.setItem('count', current.toString());
    return state + 1;
  }),
  on(decrement, (state) => {
    const current = state - 1;
    localStorage.setItem('count', current.toString());
    return state - 1;
  }),
  on(reset, (_state) => {
    localStorage.setItem('count', initialStateBackup.toString());
    return initialStateBackup;
  }),
  on(initialValue, (_state, { num }) => {
    initialStateBackup = num
    localStorage.setItem('count', num.toString());
    return num
  })
);


export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
