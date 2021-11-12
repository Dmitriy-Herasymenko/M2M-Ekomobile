const  defaultState = {
    posts: []
};

const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: [...state.posts, ...action.payload]};
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]};
        case UPDATE_POST:
            return {posts: state.posts.map( post => post.id === action.payload.id ? action.payload : post)};
        default:
            return state
    }
};

export const getPosts = payload => ({type: GET_POSTS, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const updatePost = payload => ({type: UPDATE_POST, payload});