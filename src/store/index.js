import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from './reducers/cashReducer';
import {usersReducer} from "./reducers/usersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    users: usersReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));