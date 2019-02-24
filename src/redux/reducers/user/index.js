import * as c from '../../constants/user/';
const initState = {
    isSuccessLogin: false,
    isErrorLogin : false,
    errorLoginMessage : null,
    isSuccessRegister: false,
    isErrorRegister : false,
    errorRegisterMessage : null,
}

export default function userReducer(state = initState, action){
    switch (action.type) {
        case c.REQUEST_LOGIN_SUCCESS: return {
					...state,
					isSuccessLogin: true,
					isErrorLogin: false,
					errorLoginMessage : null
				}
				case c.REQUEST_LOGIN_ERROR : return {
					...state,
					isSuccessLogin: false,
					isErrorLogin: true,
					errorLoginMessage: action.payload
				}
				case c.REQUEST_REGISTER_SUCCESS: return {
					...state,
					isSuccessRegister : true,
					isErrorRegister: false,
					errorRegisterMessage: null,
				}
				case c.REQUEST_REGISTER_ERROR: return {
					...state,
					isSuccessRegister : false,
					isErrorRegister: true,
					errorRegisterMessage: action.payload,
				}
				case c.LOGOUT: return {
					...state,
					isSuccessRegister : false,
					isSuccessLogin: false
				}
        default: return state;
    }
}