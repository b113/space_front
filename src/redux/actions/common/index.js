import {
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_ERROR, 
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_ERROR,
    MOBILE_MENU_HANDLE,
    FETCH_POSTS_BY_ID, 
    FETCH_POSTS_BY_ID_SUCCESS,
    FETCH_POSTS_BY_ID_ERROR} from '../../constants/common/';
import axios from 'axios';
// https://swapi.co/api/starships/

//Fetch posts
export const fetchPosts = () => {
    return dispatch => axios.get('http://54.37.125.178:8081/articles/list/10')
        .then(articles => {dispatch(fetchPostsSuccess(articles.data))
            }) 
        .catch(error => dispatch(error.message))
}

export const fetchPostsSuccess = (data) => {
    return {
        type : FETCH_POSTS_SUCCESS,
        payload : data
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
    return dispatch => axios.get('http://54.37.125.178:8081/articles/allCategory')
        .then(categories => dispatch(fetchCategoriesSuccess(categories)))
        .catch(error => dispatch(fetchCategoriesError(error)))
}

export const fetchCategoriesSuccess = ({data}) => {
    return {
        type : FETCH_CATEGORIES_SUCCESS,
        payload : data
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


export const fetchPostsById = (name) => {
    return dispatch => axios.get(`http://54.37.125.178:8081/articles/listArticals/${name}`)
        .then(articles => dispatch(fetchPostsByIdSuccess(articles.data)))
        .catch(error => dispatch(error))
}   


export const fetchPostsByIdSuccess = (data) => {
    return {
        type : FETCH_POSTS_BY_ID_SUCCESS,
        payload : data
    }
}

export const fetchPostsByIdError = (error) => {
    return {
        type : FETCH_POSTS_BY_ID_ERROR,
        error
    }
}

