import { ADD_USER, GET_USERS, REMOVE_USER  } from './index';

const defaultState = {
    users: []
};

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]};
        case GET_USERS:
            return {...state, users: [...state.users, ...action.payload]};
        case REMOVE_USER:
            return {...state, users: state.users.filter(users => users.id !== action.payload)};
        default:
            return state
    }
};