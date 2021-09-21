import axios from "axios";
import { isAuthenticated, userInfo } from "../components/authentication/authUtilities";
import { API } from "./baseURL";

// review action types
const LOADING = 'LOADING';
const ADD_REVIEW = 'ADD_REVIEW';
const SUCCESS_ADD_REVIEW_MSG = 'SUCCESS_ADD_REVIEW_MSG';
const ERROR_ADD_REVIEW_MSG = 'ERROR_ADD_REVIEW_MSG';
const LOAD_ALL_REVIEW = 'LOAD_ALL_REVIEW';

// review action creators

export const loading = isLoading =>{
    return {
        type: LOADING,
        payload: isLoading
    }
}

export const addReview = service =>{
    return {
        type: ADD_REVIEW,
        payload: service
    }
}

export const successAddReviewMsg = msg =>{
    return {
        type: SUCCESS_ADD_REVIEW_MSG,
        payload: msg
    }
}

export const loadAllReview = review =>{
    return {
        type: LOAD_ALL_REVIEW,
        payload: review
    }
}

export const errorAddReviewMsg = err =>{
    return {
        type: ERROR_ADD_REVIEW_MSG,
        payload: err
    }
}

// create review 

export const createNewReview = data => dispatch =>{
    dispatch(loading(true));
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
        dispatch(loading(false));
        if(response.status === 200){
            dispatch(successAddReviewMsg('successfully added'))
        }
        dispatch(addReview(response.data));
        setTimeout(()=>dispatch(successAddReviewMsg(null)),2000)
    })
    .catch(err => {
        dispatch(loading(false));
        dispatch(dispatch(errorAddReviewMsg(err.response.data)))
        setTimeout(()=>dispatch(errorAddReviewMsg(null)),2000)
    })
}

// review reducer

export const userReview = ( reviewState={reviews:[],isLoading:false,successMsg:null,errMsg:null},action )=>{
    switch (action.type) {
        case LOADING:
            return {
                ...reviewState,
                isLoading: action.payload
            }
        case ADD_REVIEW:
            return {
                ...reviewState,
                reviews: reviewState.reviews.concat(action.payload)
            }
        case SUCCESS_ADD_REVIEW_MSG:
            return {
                ...reviewState,
                successMsg: action.payload
            }
        case ERROR_ADD_REVIEW_MSG:
            return {
                ...reviewState,
                errMsg: action.payload
            }
        case LOAD_ALL_REVIEW:
            return {
                ...reviewState,
                reviews: action.payload
            }
    
        default:
            return reviewState;
    }
}