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

export const loadService = service =>{
    return {
        type: actionTypes.LOAD_SERVICE,
        payload: service
    }
}

export const errorServiceLoad = err =>{
    return {
        type: actionTypes.ERROR_LOAD_SERVICE,
        payload: err
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
    loadingService(true);
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
    .then(response => response.data)
    .then(newService => {
        dispatch(loadingService(false));
        dispatch(addService(newService));
    })
    .catch(err => {
        dispatch(loadingService(false));
        dispatch(dispatch(errorService(err.response.data)))
    })
}
