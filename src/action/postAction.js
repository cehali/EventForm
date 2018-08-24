import { FETCH_POSTS, NEW_POST} from "./types";

export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: ['test']
    })
};

export const createPost = () => dispatch => {
    dispatch({
        type: NEW_POST,
        payload: 'test'
    })
};