import { getTodo } from "../store/reducers/todoReducer";

export const fetchTodo = () => {
    return dispatch => {
                fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.json())
                    .then(json => dispatch(getTodo(json)));
    }
};