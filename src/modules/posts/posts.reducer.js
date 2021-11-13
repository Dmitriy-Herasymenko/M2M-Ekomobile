import {GET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST_FETCHING, DELETE_POST_SUCCESS} from './index';

const defaultState = {
    items: [],
    loading: false
};

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, items: [...state.items, ...action.payload]};
        case ADD_POST:
            return {...state, items: [...state.items, action.payload]};
        case UPDATE_POST:
            return {items: state.items.map(post => post.id === action.payload.id ? action.payload : post)};
        case DELETE_POST_FETCHING:
            return {...state, loading: true};
        case DELETE_POST_SUCCESS:
            return {...state, items: state.items.filter(post => post.id !== action.payload), loading: false};
        default:
            return state
    }
};
