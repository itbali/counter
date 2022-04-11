import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counterReducer";

export type rootStoreType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store: Store = createStore(rootReducer)