const  defaultState = {
    items: [],
    loading: false
};

const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
const DELETE_POST_FETCHING = 'DELETE_POST_FETCHING';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, items: [...state.items, ...action.payload]};
        case ADD_POST:
            return {...state, items: [...state.items, action.payload]};
        case UPDATE_POST:
            return {items: state.items.map(post => post.id === action.payload.id ? action.payload : post)};
        case DELETE_POST_FETCHING:
            return {...state, loading: true};
        case DELETE_POST_SUCCESS:
            return {...state, items: state.items.filter(post => post.id !== action.payload), loading: false};
        default:
            return state
    }
};

export const getPosts = payload => ({type: GET_POSTS, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const updatePost = payload => ({type: UPDATE_POST, payload});
export const deletePostFetching = payload => ({type: DELETE_POST_FETCHING, payload});
export const deletePostSuccess = payload => ({type: DELETE_POST_SUCCESS, payload});
export const deletePostError = payload => ({type: DELETE_POST_ERROR, payload});