const defaultState = {
    todo: []
};

const GET_TODO = 'GET_TODO';

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {...state, todo: [...state.todo, ...action.payload]};
        default:
            return state
    }
};

export const getTodo = payload => ({type: GET_TODO, payload});