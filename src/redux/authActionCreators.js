import * as actionTypes from './actionTypes';
import { API } from './baseURL';
import axios from 'axios';

export const isLoading = loading =>{
    return {
        type: actionTypes.AUTH_LOADING,
        payload: loading
    }
}

export const authSuccess = (token,data) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload:{
            token, data
        }
    }
}

export const authFailed = msg =>{
    return {
        type: actionTypes.AUTH_FAILED,
        payload: msg
    }
}

export const auth = (data,mode)=>{
    return dispatch => {
        dispatch(isLoading(true))
        let authUrl = null;
        if(mode === 'signup'){
            authUrl = `${API}/user/signup`
        }else if(mode === 'login'){
            authUrl = `${API}/user/login`
        }
        axios.post(authUrl,data)
        .then(response =>{
            dispatch(authSuccess(response.data.token,response.data.data));
        })
        .catch(err=>{
            dispatch(authFailed(err.response.data))
            setTimeout(()=>dispatch(authFailed(null)),2000)
        })
    }
}