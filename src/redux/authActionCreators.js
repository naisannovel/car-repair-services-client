import * as actionTypes from './actionTypes';
import { API } from './baseURL';
import axios from 'axios';

export const authSuccess = (token,userData) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload:{
            token, userData
        }
    }
}

export const auth = (data,mode)=>{
    return dispatch => {
        let authUrl = null;
        if(mode === 'signup'){
            // authUrl = `${API}/user/signup`
            authUrl = `${API}`
        }else if(mode === 'login'){
            authUrl = `${API}`
        }
        axios.post(authUrl,data)
        .then(response =>{
            console.log(response);
        })
    }
}