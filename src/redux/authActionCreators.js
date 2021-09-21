import { API } from './baseURL';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// auth action types

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILED = 'AUTH_FAILED';
const AUTH_LOADING = 'AUTH_LOADING';
const AUTH_LOGOUT = 'AUTH_LOGOUT';


// auth actions

export const isLoading = loading =>{
    return {
        type: AUTH_LOADING,
        payload: loading
    }
}

export const authSuccess = (token,id) =>{
    return {
        type: AUTH_SUCCESS,
        payload:{
            token, id
        }
    }
}

export const authFailed = msg =>{
    return {
        type: AUTH_FAILED,
        payload: msg
    }
}

export const auth = (data,mode,cb)=>{
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
            dispatch(isLoading(false))
            localStorage.setItem('token',JSON.stringify(response.data.token));
            localStorage.setItem('_id',response.data.data._id);
            const { exp } = jwt_decode(response.data.token);
            const expirationTime = new Date(exp * 1000);
            localStorage.setItem('expirationTime',expirationTime);
            dispatch(authSuccess(response.data.token,response.data.data._id));
            cb()
            
        })
        .catch(err=>{
            dispatch(isLoading(false))
            dispatch(authFailed(err.response.data))
            setTimeout(()=>dispatch(authFailed(null)),2000)
        })
    }
}

export const googleAuth = ()=> dispatch => {
    // dispatch(isLoading(true))
    const url = `${API}/auth/google/redirect`;
    axios.get(url)
    .then(response =>{
        // dispatch(isLoading(false)) 
        console.log(response);  
    })
    
    // .catch(err=>{
    //     dispatch(isLoading(false))
    //     dispatch(authFailed(err.response.data))
    //     setTimeout(()=>dispatch(authFailed(null)),2000)
    // })
}

export const logout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('expirationTime');
    return {
        type: AUTH_LOGOUT
    }
}

export const authCheck = ()=>dispatch=>{
    const token = localStorage.getItem('token');

    if(!token){
        dispatch(logout())
    }else{
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if(expirationTime <= new Date()){
            dispatch(logout())
        }else{
            const _id = localStorage.getItem('_id');
            dispatch(authSuccess(token,_id));
        }
    }
}

// auth reducer

export const userAuth = (userState = { userData: {token: null, id: null}, isLoading: false, errMsg: null }, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...userState,
                isLoading: action.payload
            }
        case AUTH_SUCCESS:
            return {
                ...userState,
                userData:{
                    token:action.payload.token,
                    id: action.payload.id
                },
                errMsg: null,
            }
        case AUTH_FAILED:
            return {
                ...userState,
                userData: {token: null, id: null},
                errMsg: action.payload,
            }
        case AUTH_LOGOUT:
            return {
                ...userState,
                userData: {token: null, id: null}
            }
        default:
            return userState;
    }
};