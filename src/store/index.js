import {createStore, combineReducers, applyMiddleware} from 'redux';
import {cashReducer} from './reducers/cashReducer';
import {usersReducer} from './reducers/usersReducer';
import {todoReducer} from './reducers/todoReducer';
import {postsReducer} from "./reducers/postsReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    cash: cashReducer,
    users: usersReducer,
    todo: todoReducer,
    posts: postsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));