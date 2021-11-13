import { GET_TODO } from "./index";

export const fetchTodo = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(getTodo(json)));
    }
};

export const getTodo = payload => ({type: GET_TODO, payload});