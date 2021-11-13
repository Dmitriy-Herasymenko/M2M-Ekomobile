export {
    GET_POSTS, ADD_POST, DELETE_POST_FETCHING, DELETE_POST_SUCCESS, DELETE_POST_ERROR, UPDATE_POST
} from './posts.consts';

export {
    getPosts,
    addPost,
    deletePostFetching,
    deletePostSuccess,
    deletePostError,
    updatePost,
    postPostRequest,
    getPostsRequest,
    deletePostRequest,
    updatePostRequest
} from './posts.actions';

export {postsReducer} from './posts.reducer';