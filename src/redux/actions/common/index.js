import {
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_ERROR, 
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_ERROR,
    MOBILE_MENU_HANDLE } from '../../constants/common/';
import axios from 'axios';

//Fetch posts
export const fetchPosts = () => {
    return dispatch => axios.get('https://swapi.co/api/starships/')
        .then(articles => dispatch(fetchPostsSuccess(articles)))
        .catch(error => dispatch(error))
}

export const fetchPostsSuccess = ({data}) => {
    return {
        type : FETCH_POSTS_SUCCESS,
        payload : data.results
    }
}

export const fetchPostsError = (error) => {
    return {
        type : FETCH_POSTS_ERROR,
        error
    }
}


//Fetch categories
export const fetchCategories = () => {
    return dispatch => axios.get('https://swapi.co/api/people/')
        .then(categories => dispatch(fetchCategoriesSuccess(categories)))
        .catch(error => dispatch(fetchCategoriesError(error)))
}

export const fetchCategoriesSuccess = ({data}) => {
    return {
        type : FETCH_CATEGORIES_SUCCESS,
        payload : data.results
    }
}

export const fetchCategoriesError = (error) => {
    return {
        type : FETCH_CATEGORIES_ERROR,
        error
    }
}

export const mobileMenuHandle = () => {
    return {
        type: MOBILE_MENU_HANDLE,
    }
}