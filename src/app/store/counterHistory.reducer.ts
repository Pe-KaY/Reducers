import { clearHistory, addToHistory } from "./counterHistory.actions";
import { Action, createReducer, on } from '@ngrx/store';



const initialState:number[] = []


const _counterHistoryReducer = createReducer(
    initialState,
    on(addToHistory, (state, { count }) => [...state, count]),
    on(clearHistory, () => [])
)


export function counterHistoryReducer(state: number[] | undefined, action: Action) {
    return _counterHistoryReducer(state, action);
}

