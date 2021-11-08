import {addPost, getPosts} from "../store/reducers/postsReducer";

export const fecthPostsGet = () => {

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(getPosts(json)))
    }
}

export const fecthPostsPostRequest = (title, body) => {

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
}