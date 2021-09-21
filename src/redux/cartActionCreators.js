import axios from 'axios';
import { API } from './baseURL';
import { isAuthenticated,userInfo } from '../components/authentication/authUtilities';


//cart action types

export const TAKE_SERVICE_LOADING = 'TAKE_SERVICE_LOADING';
export const MY_SERVICE_SUCCESS_MSG = 'MY_SERVICE_SUCCESS_MSG';
export const LOAD_MY_TAKEN_SERVICE = 'LOAD_MY_TAKEN_SERVICE';
export const MY_SERVICE_ERR_MSG = 'MY_SERVICE_ERR_MSG';


// cart action

export const takeServiceLoading = isLoading =>{
    return {
        type: TAKE_SERVICE_LOADING,
        payload: isLoading
    }
}

export const myServiceSuccessMsg = msg =>{
    return {
        type: MY_SERVICE_SUCCESS_MSG,
        payload: msg
    }
}

export const loadMyTakenService = myService =>{
    return {
        type: LOAD_MY_TAKEN_SERVICE,
        payload: myService
    }
}

export const myServiceErrMsg = err =>{
    return {
        type: MY_SERVICE_ERR_MSG,
        payload: err
    }
}

// add

export const serviceAddInCart = data => dispatch =>{
    const { token } = isAuthenticated() ? userInfo() : "";

    // dispatch(takeServiceLoading(true));
    
    axios.post(`${API}/cart/${data}`,null,{
        headers: {
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
        dispatch(takeServiceLoading(false));
            dispatch(myServiceSuccessMsg('successfully added in your cart'))
        setTimeout(()=>dispatch(myServiceSuccessMsg(null)),3000)
    })
    .catch(err => {
        dispatch(takeServiceLoading(false));
        dispatch(myServiceErrMsg(err.response.data))
        setTimeout(()=>dispatch(myServiceErrMsg(null)),2000)
    })
}

// get

export const serviceIsCart = (data,cb) => dispatch =>{
    const { token } = isAuthenticated() ? userInfo() : "";
    dispatch(takeServiceLoading(true));
    
    axios.get(`${API}/cart/${data}`,{
        headers: {
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
        dispatch(takeServiceLoading(false));
        cb()
    })
    .catch(err => {
        dispatch(takeServiceLoading(false));
        dispatch(myServiceErrMsg(err.response.data))
        setTimeout(()=>dispatch(myServiceErrMsg(null)),2000)
    })
}

// get

export const getMyService = ()=> dispatch =>{
    dispatch(takeServiceLoading(true));
    axios.get(`${API}/cart`)
    .then(response =>{
        dispatch(takeServiceLoading(false));
        dispatch(loadMyTakenService(response.data));
    })
}

// cart reducer
export const userTakenService = ( myServiceState={services:[],isLoading:false,successMsg:null,errMsg:null},action )=>{
    switch (action.type) {
        case TAKE_SERVICE_LOADING:
            return {
                ...myServiceState,
                isLoading: action.payload
            }
        case MY_SERVICE_SUCCESS_MSG:
            return {
                ...myServiceState,
                successMsg: action.payload
            }
        case MY_SERVICE_ERR_MSG:
            return {
                ...myServiceState,
                errMsg: action.payload
            }
        case LOAD_MY_TAKEN_SERVICE:
            return {
                ...myServiceState,
                services: action.payload
            }
    
        default:
            return myServiceState;
    }
}