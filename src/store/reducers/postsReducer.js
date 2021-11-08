const  defaultState = {
    posts: []
}

const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD_POST';

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: [...state.posts, ...action.payload]}
        case ADD_POST:
            console.log("action", action)
            return {...state, posts: [...state.posts, action.payload]}
        default:
            return state
    }
}

export const getPosts = payload => ({type: GET_POSTS, payload});
export const addPost = payload => ({type: ADD_POST, payload});