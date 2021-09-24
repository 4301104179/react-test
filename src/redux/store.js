import { combineReducers } from "redux";
import userReducer from "./reducer";
import { createStore } from "redux";

const rootReducer = combineReducers({
    user: userReducer
})


export const store = createStore(rootReducer)

