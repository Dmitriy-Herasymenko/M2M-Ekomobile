const defaultState = {
    users: []
};

const ADD_USER = 'ADD_USER';
const GET_USERS = 'GET_USERS';
const REMOVE_USER = 'REMOVE_USER';

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

export const addUser = payload => ({type: ADD_USER, payload});
export const getUsers = payload => ({type: GET_USERS, payload});
export const removeUser = payload => ({type: REMOVE_USER, payload});