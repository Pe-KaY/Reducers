import { counterReducer } from './counter.reducer';
import { counterHistoryReducer } from './counterHistory.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    count: number ;
    history: number[];
}


export const reducers: ActionReducerMap<AppState> = {
    count: counterReducer,  
    history: counterHistoryReducer
}