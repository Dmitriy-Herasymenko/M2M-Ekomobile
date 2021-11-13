import {ADD_USER, GET_USERS_SUCCESS, GET_USERS_FETCHING, REMOVE_USER} from './index'

export const fetchUsers = () => {

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(getUsers(json)))
    }
}

export const addUser = payload => ({type: ADD_USER, payload});
export const getUsers = payload => ({type: GET_USERS_SUCCESS, payload});
export const getUsersFetching = payload => ({type: GET_USERS_FETCHING, payload});
export const removeUser = payload => ({type: REMOVE_USER, payload});