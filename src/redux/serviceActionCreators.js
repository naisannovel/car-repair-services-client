import axios from "axios";
import { isAuthenticated, userInfo } from "../components/authentication/authUtilities";
import { API } from './baseURL';

// service action types

const LOADING_SERVICE = 'LOADING_SERVICE';
const ADD_SERVICE = 'ADD_SERVICE';
const SUCCESS_SERVICE_MSG = 'SUCCESS_SERVICE_MSG';
const LOAD_SERVICE = 'LOAD_SERVICE';
const ERROR_SERVICE_MSG = 'ERROR_SERVICE_MSG';
const DELETE_SERVICE = 'DELETE_SERVICE';
const UPDATED_SERVICE = 'UPDATED_SERVICE'; 
const SERVICE_UPDATED_MSG = 'SERVICE_UPDATED_MSG';


// service action creators

export const loadingService = isLoading =>{
    return {
        type: LOADING_SERVICE,
        payload: isLoading
    }
}

export const addService = service =>{
    return {
        type: ADD_SERVICE,
        payload: service
    }
}

export const SuccessServiceMsg = msg =>{
    return {
        type: SUCCESS_SERVICE_MSG,
        payload: msg
    }
}

export const loadService = service =>{
    return {
        type: LOAD_SERVICE,
        payload: service
    }
}

export const removeService = id =>{
    return {
        type: DELETE_SERVICE,
        payload: id
    }
}

export const errorServiceMsg = err =>{
    return {
        type: ERROR_SERVICE_MSG,
        payload: err
    }
}
export const updatedService = item =>{
    return {
        type: UPDATED_SERVICE,
        payload: item
    }
}

export const serviceUpdateMsg = msg =>{
    return {
        type: SERVICE_UPDATED_MSG,
        payload: msg
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

//update
export const servicePriceUpdate = (item,value,cb) => dispatch => {
    if(item?.price !== value?.price){
        dispatch(loadingService(true));
        const { token } = isAuthenticated() ? userInfo() : "";
        axios.put(`${API}/service/${item?._id}`,value,{
          headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
        }
        })
        .then(response =>{
            console.log('response?.data ', response?.data);
            dispatch(loadingService(false));
            dispatch(updatedService(response?.data))
            dispatch(serviceUpdateMsg('successfully updated'));
            setTimeout(()=>dispatch(serviceUpdateMsg(null)),2000)
        })
    }
    cb()
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

// service reducer

export const vehicleService = (serviceState = {services: [], isLoading: false, successMsg: null, errMsg: null,updateSuccessMsg:null}, action)=>{
    switch (action.type) {
        case LOADING_SERVICE:
            return {
                ...serviceState,
                isLoading: action.payload
            }
        case ADD_SERVICE:
            return {
                ...serviceState,
                services: serviceState.services.concat(action.payload)
            }
        case SUCCESS_SERVICE_MSG:
            return {
                ...serviceState,
                successMsg: action.payload
            }
        case LOAD_SERVICE:
            return {
                ...serviceState,
                services: action.payload
            }
        case DELETE_SERVICE:
            return {
                ...serviceState,
                services: serviceState.services.filter(item => item._id !== action.payload)
            }
        case ERROR_SERVICE_MSG:
            return {
                ...serviceState,
                errMsg: action.payload
            }
        case UPDATED_SERVICE:
            const index = serviceState.services.findIndex(item => item._id === action.payload._id);
            serviceState.services[index] = action.payload;
            return {
                ...serviceState,
                services: serviceState.services
            }
        case SERVICE_UPDATED_MSG:
            return {
                ...serviceState,
                updateSuccessMsg: action.payload
            }

        default:
            return serviceState;
    }
}