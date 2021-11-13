import {GET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST_FETCHING, DELETE_POST_SUCCESS, DELETE_POST_ERROR} from './index';


export const getPostsRequest = () => {

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(getPosts(json)))
    }
};
export const postPostRequest = (title, body) => {

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: Date.now(),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(addPost(json)));
    }
};
export const updatePostRequest = (id, title, body) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                title,
                body,
                userId: Date.now(),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(updatePost(json)));
    }
};
export const deletePostRequest = id => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then((data) => dispatch(deletePostSuccess(id)))
            .catch((error) => dispatch(deletePostError(error)))
    }
};


export const getPosts = payload => ({type: GET_POSTS, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const updatePost = payload => ({type: UPDATE_POST, payload});
export const deletePostFetching = payload => ({type: DELETE_POST_FETCHING, payload});
export const deletePostSuccess = payload => ({type: DELETE_POST_SUCCESS, payload});
export const deletePostError = payload => ({type: DELETE_POST_ERROR, payload});