import {CREATE_POST, FETCH_POSTS} from './types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchedPosts() {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts? limit=5')
        const json = await response.json()
        dispatch({type: FETCH_POSTS, payload: json})
    }
}