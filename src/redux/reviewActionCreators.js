import axios from "axios";
import { isAuthenticated, userInfo } from "../components/authentication/authUtilities";
import { API } from "./baseURL";

// review action types
const LOADING_REVIEW = 'LOADING_REVIEW';
const ADD_REVIEW = 'ADD_REVIEW';
const SUCCESS_REVIEW_MSG = 'SUCCESS_REVIEW_MSG';
const ERROR_REVIEW_MSG = 'ERROR_REVIEW_MSG';
const LOAD_REVIEW = 'LOAD_REVIEW';

// review action creators

export const loadingReview = isLoading =>{
    return {
        type: LOADING_REVIEW,
        payload: isLoading
    }
}

export const addReview = service =>{
    return {
        type: ADD_REVIEW,
        payload: service
    }
}

export const successReviewMsg = msg =>{
    return {
        type: SUCCESS_REVIEW_MSG,
        payload: msg
    }
}

export const loadReview = review =>{
    return {
        type: LOAD_REVIEW,
        payload: review
    }
}

export const errorReviewMsg = err =>{
    return {
        type: ERROR_REVIEW_MSG,
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

// review reducer

export const userReview = ( reviewState={reviews:[],isLoading:false,successMsg:null,errMsg:null},action )=>{
    switch (action.type) {
        case LOADING_REVIEW:
            return {
                ...reviewState,
                isLoading: action.payload
            }
        case ADD_REVIEW:
            return {
                ...reviewState,
                reviews: reviewState.reviews.concat(action.payload)
            }
        case SUCCESS_REVIEW_MSG:
            return {
                ...reviewState,
                successMsg: action.payload
            }
        case ERROR_REVIEW_MSG:
            return {
                ...reviewState,
                errMsg: action.payload
            }
        case LOAD_REVIEW:
            return {
                ...reviewState,
                reviews: action.payload
            }
    
        default:
            return reviewState;
    }
}