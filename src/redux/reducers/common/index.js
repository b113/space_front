import * as c from '../../constants/common/';
const initState = {
    articles : {
        isFetchedSuccess : false,
        isFetchedError : false,
        data : null
    },
    categories : {
        isFetchedSuccess : false,
        isFetchedError : false,
        data : null
    },
    categoriesById : {
        isFetchedSuccess : false,
        isFetchedError : false,
        data : null
    },
    isMobileMenuShow: false
}

export default function commonReducer(state = initState, action){
    
    switch(action.type){
        case c.FETCH_POSTS_SUCCESS : return {
            ...state,
            articles : {
                isFetchedSuccess : true,
                isFetchedError : false,
                data : action.payload
            }
        } 
        case c.FETCH_POSTS_ERROR : return {
            ...state,
            articles : {
                isFetchedSuccess : false,
                isFetchedError : true,
                data : null
            } 
        }
        case c.FETCH_CATEGORIES_SUCCESS : return {
            ...state,
            categories : {
                isFetchedSuccess : true,
                isFetchedError : false,
                data: action.payload
            }
        }
        case c.FETCH_CATEGORIES_ERROR : return {
            ...state,
            categories : {
                isFetchedSuccess : false,
                isFetchedError : true,
                data: null
            }
        }
        case c.FETCH_POSTS_BY_ID_SUCCESS : return {
            ...state,
            categoriesById : {
                isFetchedSuccess : false,
                isFetchedError : true,
                data: action.payload
            }
        }
        case c.FETCH_POSTS_BY_ID_ERROR : return {
            ...state,
            categoriesById : {
                isFetchedSuccess : false,
                isFetchedError : true,
                data: null
            }
        }
        case c.MOBILE_MENU_HANDLE : return {
            ...state,
            isMobileMenuShow: !state.isMobileMenuShow
        }
        default : return state;
    }
}