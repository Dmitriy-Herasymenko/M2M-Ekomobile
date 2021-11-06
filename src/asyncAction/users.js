import { getUsers } from "../store/reducers/usersReducer";

export const fetchUsers = () => {

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(getUsers(json)))
    }
}