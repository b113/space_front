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
    }
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
            categories : {
                isFetchedSuccess : false,
                isFetchedError : true,
                data : null
            } 
        }
        default : return state;
    }
}