import {createStore, combineReducers, applyMiddleware} from 'redux';
import {usersReducer} from '../modules/users';
import {todosReducer} from '../modules/todos';
import {postsReducer} from "../modules/posts";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    users: usersReducer,
    todo: todosReducer,
    posts: postsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));