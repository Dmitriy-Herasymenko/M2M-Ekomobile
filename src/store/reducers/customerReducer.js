const defaultState = {
    customers: []
};

export const customerReducer = (state = defaultState, action) => {
    console.log("state", action.payload)
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload};
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload};
        default:
            return state
    }
};
