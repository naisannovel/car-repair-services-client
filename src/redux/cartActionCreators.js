import axios from 'axios';
import { API } from './baseURL';
import { isAuthenticated,userInfo } from '../components/authentication/authUtilities';
import swal from 'sweetalert';


//cart action types

export const CART_LOADING = 'CART_LOADING';
export const ADD_TO_CART_SUCCESS_MSG = 'ADD_TO_CART_SUCCESS_MSG';
export const LOAD_MY_CART_ITEM = 'LOAD_MY_CART_ITEM';
export const ADD_TO_CART_ERR_MSG = 'ADD_TO_CART_ERR_MSG';


// cart action

export const cartLoading = isLoading =>{
    return {
        type: CART_LOADING,
        payload: isLoading
    }
}

export const addToCartSuccessMsg = msg =>{
    return {
        type: ADD_TO_CART_SUCCESS_MSG,
        payload: msg
    }
}

export const loadMyCartItem = myService =>{
    return {
        type: LOAD_MY_CART_ITEM,
        payload: myService
    }
}

export const addToCartErrMsg = err =>{
    return {
        type: ADD_TO_CART_ERR_MSG,
        payload: err
    }
}

// add

export const serviceAddInCart = data => dispatch =>{
    const { token } = isAuthenticated() ? userInfo() : "";

    // dispatch(cartLoading(true));
    
    axios.post(`${API}/cart/${data}`,null,{
        headers: {
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
        dispatch(cartLoading(false));
        dispatch(addToCartSuccessMsg('successfully added in your cart'))
        setTimeout(()=>dispatch(addToCartSuccessMsg(null)),3000)
    })
    .catch(err => {
        console.log(err);
        dispatch(cartLoading(false));
        dispatch(addToCartErrMsg(err.response.data))
        setTimeout(()=>dispatch(addToCartErrMsg(null)),2000)
    })
}

// get

export const serviceIsCart = (data,cb) => dispatch =>{
    const { token } = isAuthenticated() ? userInfo() : "";
    dispatch(cartLoading(true));
    
    axios.get(`${API}/cart/${data}`,{
        headers: {
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
        dispatch(cartLoading(false));
        cb()
    })
    .catch(err => {
        dispatch(cartLoading(false));
        dispatch(addToCartErrMsg(err.response.data))
        setTimeout(()=>dispatch(addToCartErrMsg(null)),2000)
    })
}

// get

export const getMyService = ()=> dispatch =>{
    dispatch(cartLoading(true));
    axios.get(`${API}/cart`)
    .then(response =>{
        dispatch(cartLoading(false));
        dispatch(loadMyCartItem(response.data));
    })
}

// cart reducer
export const userTakenService = ( myCart={cart:[],isLoading:false,successMsg:null,errMsg:null},action )=>{
    switch (action.type) {
        case CART_LOADING:
            return {
                ...myCart,
                isLoading: action.payload
            }
        case ADD_TO_CART_SUCCESS_MSG:
            return {
                ...myCart,
                successMsg: action.payload
            }
        case ADD_TO_CART_ERR_MSG:
            return {
                ...myCart,
                errMsg: action.payload
            }
        case LOAD_MY_CART_ITEM:
            return {
                ...myCart,
                services: action.payload
            }
    
        default:
            return myCart;
    }
}