import {  } from "./types";

export const fetchPosts = () => dispatch => {
    dispatch({
        type: 'FETCH_POSTS',
        payload: ['test']
    })
};