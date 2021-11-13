import {GET_TODO} from "./index";

const defaultState = {
    items: [],
    loader: false
};

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {...state, items: [...state.items, ...action.payload]};
        default:
            return state
    }
};