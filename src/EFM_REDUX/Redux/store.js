import { combineReducers, legacy_createStore } from "redux";
import { Reducer } from "./StagaireSlice";


const StagiaireReducer = combineReducers({
        stg: Reducer
    })
export const Store = legacy_createStore(StagiaireReducer);
