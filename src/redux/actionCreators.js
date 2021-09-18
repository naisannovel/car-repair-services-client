import * as actionTypes from './actionTypes';
import axios from 'axios';
import { API } from './baseURL';
import { isAuthenticated,userInfo } from '../components/authentication/authUtilities';

export const loadingService = isLoading =>{
    return {
        type: actionTypes.LOADING_SERVICE,
        payload: isLoading
    }
}

export const addService = service =>{
    return {
        type: actionTypes.ADD_SERVICE,
        payload: service
    }
}

export const SuccessServiceMsg = msg =>{
    return {
        type: actionTypes.SUCCESS_SERVICE_MSG,
        payload: msg
    }
}

export const loadService = service =>{
    return {
        type: actionTypes.LOAD_SERVICE,
        payload: service
    }
}

export const removeService = id =>{
    return {
        type: actionTypes.DELETE_SERVICE,
        payload: id
    }
}

export const errorServiceMsg = err =>{
    return {
        type: actionTypes.ERROR_SERVICE_MSG,
        payload: err
    }
}

// create service
export const createNewService = data => dispatch =>{
    dispatch(loadingService(true));
    const { token } = isAuthenticated() ? userInfo() : "";
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('price',data.price);
    formData.append('about',data.about);
    formData.append('image',data.image[0])
    
    axios.post(`${API}/service`,formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
        dispatch(loadingService(false));
        if(response.status === 200){
            dispatch(SuccessServiceMsg('successfully added'))
        }
        setTimeout(()=>dispatch(SuccessServiceMsg(null)),2000)
        dispatch(addService(response.data));
    })
    .catch(err => {
        dispatch(loadingService(false));
        dispatch(dispatch(errorServiceMsg(err.response.data)))
        setTimeout(()=>dispatch(errorServiceMsg(null)),2000)
    })
}

// get
export const getAllService = ()=> dispatch =>{
    dispatch(loadingService(true));
    axios.get(`${API}/service`)
    .then(response =>{
        dispatch(loadingService(false));
        dispatch(loadService(response.data));
    })
}

// delete
export const deleteService = id => dispatch =>{
    dispatch(loadingService(true));
    const { token } = isAuthenticated() ? userInfo() : "";
    axios.delete(`${API}/service/${id}`,{
        headers: {
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
            dispatch(loadingService(false));
            dispatch(removeService(id));
        })
    .catch(err => {
            dispatch(loadingService(false))})
}


// review

export const loadingReview = isLoading =>{
    return {
        type: actionTypes.LOADING_REVIEW,
        payload: isLoading
    }
}

export const addReview = service =>{
    return {
        type: actionTypes.ADD_REVIEW,
        payload: service
    }
}

export const successReviewMsg = msg =>{
    return {
        type: actionTypes.SUCCESS_REVIEW_MSG,
        payload: msg
    }
}

export const loadReview = review =>{
    return {
        type: actionTypes.LOAD_REVIEW,
        payload: review
    }
}

export const errorReviewMsg = err =>{
    return {
        type: actionTypes.ERROR_REVIEW_MSG,
        payload: err
    }
}

// create review 

export const createNewReview = data => dispatch =>{
    dispatch(loadingReview(true));
    const { token } = isAuthenticated() ? userInfo() : "";
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('profession',data.profession);
    formData.append('feedback',data.feedback);
    formData.append('image',data.image[0]);
    formData.append('userId',data.userId);
    
    axios.post(`${API}/review`,formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
        dispatch(loadingReview(false));
        if(response.status === 200){
            dispatch(successReviewMsg('successfully added'))
        }
        dispatch(addReview(response.data));
        setTimeout(()=>dispatch(successReviewMsg(null)),2000)
    })
    .catch(err => {
        dispatch(loadingReview(false));
        dispatch(dispatch(errorReviewMsg(err.response.data)))
        setTimeout(()=>dispatch(errorReviewMsg(null)),2000)
    })
}


// take service

export const takeServiceLoading = isLoading =>{
    return {
        type: actionTypes.TAKE_SERVICE_LOADING,
        payload: isLoading
    }
}

export const myServiceSuccessMsg = msg =>{
    return {
        type: actionTypes.MY_SERVICE_SUCCESS_MSG,
        payload: msg
    }
}

export const loadMyTakenService = myService =>{
    return {
        type: actionTypes.LOAD_MY_TAKEN_SERVICE,
        payload: myService
    }
}

export const myServiceErrMsg = err =>{
    return {
        type: actionTypes.MY_SERVICE_ERR_MSG,
        payload: err
    }
}


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

export const getMyService = ()=> dispatch =>{
    dispatch(takeServiceLoading(true));
    axios.get(`${API}/cart`)
    .then(response =>{
        dispatch(takeServiceLoading(false));
        dispatch(loadMyTakenService(response.data));
    })
}