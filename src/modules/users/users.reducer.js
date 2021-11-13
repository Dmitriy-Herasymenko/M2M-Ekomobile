import {ADD_USER, GET_USERS_SUCCESS, REMOVE_USER, GET_USERS_FETCHING} from './index';

const defaultState = {
    items: [],
    loading: false
};

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS_FETCHING:
            return {...state, loading: true};
        case GET_USERS_SUCCESS:
            return {...state, items: [...state.items, ...action.payload], loading: false};
        case ADD_USER:
            return {...state, items: [...state.items, action.payload]};
        case REMOVE_USER:
            return {...state, items: state.items.filter(users => users.id !== action.payload)};

        default:
            return state
    }
};