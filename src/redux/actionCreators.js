import * as actionTypes from './actionTypes';
import axios from 'axios';
import { API } from './baseURL';
import { isAuthenticated,userInfo } from '../components/authentication/authUtilities';

const { token } = isAuthenticated() ? userInfo() : "";

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

export const errorService = err =>{
    return {
        type: actionTypes.ERROR_SERVICE,
        payload: err
    }
}

// create service
export const createNewService = data => dispatch =>{
    dispatch(loadingService(true));
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('price',data.price);
    formData.append('about',data.about);
    formData.append('image',data.image[0])
    
    axios.post(`${API}/service/add`,formData,{
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
        dispatch(dispatch(errorService(err.response.data)))
        setTimeout(()=>dispatch(errorService(null)),2000)
    })
}

// update