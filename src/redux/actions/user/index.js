import * as c from '../../constants/user/';
import axios from 'axios';

export const requstedLogin = ({login, password, cancelCallback}) => {

    return dispatch => axios.post('http://54.37.125.178:8081/login', {login, password})
        .then((data) => { 
            if(data.status !== 200){
                throw {
                    message : 'Ошибка логина'
                }
            }
            dispatch(requstedLoginSuccess())
            cancelCallback();
        })
        .catch(error => {
            dispatch(requstedLoginError(error.message))
        })
}

export const requstedLoginSuccess = () => {
    return {
        type : c.REQUEST_LOGIN_SUCCESS
    }
}

export const requstedLoginError = (error) => {
    return {
        type : c.REQUEST_LOGIN_ERROR,
        payload: error
    }
}

export const requstedRegister = ({login, password, cancelCallback}) => {
    return dispatch => axios.post('http://54.37.125.178:8081/register', {login, password})
        .then((data) => {
            if(data.status !== 201){
                throw {
                    message : 'Такой юзер есть'
                }
            }
            dispatch(requstedRegisterSuccess())
            cancelCallback();
        })
        .catch(error => dispatch(requstedRegisterError(error.message)))
}

export const requstedRegisterSuccess = () => {
    return {
        type : c.REQUEST_REGISTER_SUCCESS
    }
}

export const requstedRegisterError = (error) => {
    return {
        type : c.REQUEST_REGISTER_ERROR,
        payload : error
    }
}

export const logout = () => {
    return dispatch => dispatch({
        type : c.LOGOUT
    })
}