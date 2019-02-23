import {FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR} from '../../constants/common/';
import axios from 'axios';

export const fetchPosts = () => {
    return dispatch => axios.get('https://swapi.co/api/starships/')
        .then(articles => dispatch(fetchPostsSuccess(articles)))
        .catch(error => dispatch(error))
}

export const fetchPostsSuccess = (articles) => {
    return {
        type : FETCH_POSTS_SUCCESS,
        payload : articles.data.results
    }
}

export const fetchPostsError = (error) => {
    return {
        type : FETCH_POSTS_ERROR,
        error
    }
}