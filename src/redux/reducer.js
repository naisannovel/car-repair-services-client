import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const userAuth = (userState = { userData: {token: null, id: null}, isLoading: false, errMsg: null }, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOADING:
            return {
                ...userState,
                isLoading: action.payload
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...userState,
                userData:{
                    token:action.payload.token,
                    id: action.payload.id
                },
                errMsg: null,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...userState,
                userData: {token: null, id: null},
                errMsg: action.payload,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...userState,
                userData: {token: null, id: null}
            }
        default:
            return userState;
    }
};

const vehicleService = (serviceState = {services: [], isLoading: false, successMsg: null, errMsg: null}, action)=>{
    switch (action.type) {
        case actionTypes.LOADING_SERVICE:
            return {
                ...serviceState,
                isLoading: action.payload
            }
        case actionTypes.ADD_SERVICE:
            return {
                ...serviceState,
                services: serviceState.services.concat(action.payload)
            }
        case actionTypes.SUCCESS_SERVICE_MSG:
            return {
                ...serviceState,
                successMsg: action.payload
            }
        case actionTypes.LOAD_SERVICE:
            return {
                ...serviceState,
                services: action.payload
            }
        case actionTypes.DELETE_SERVICE:
            return {
                ...serviceState,
                services: serviceState.services.filter(item => item._id !== action.payload)
            }
        case actionTypes.ERROR_SERVICE_MSG:
            return {
                ...serviceState,
                errMsg: action.payload
            }

        default:
            return serviceState;
    }
}

const userReview = ( reviewState={reviews:[],isLoading:false,successMsg:null,errMsg:null},action )=>{
    switch (action.type) {
        case actionTypes.LOADING_REVIEW:
            return {
                ...reviewState,
                isLoading: action.payload
            }
        case actionTypes.ADD_REVIEW:
            return {
                ...reviewState,
                reviews: reviewState.reviews.concat(action.payload)
            }
        case actionTypes.SUCCESS_REVIEW_MSG:
            return {
                ...reviewState,
                successMsg: action.payload
            }
        case actionTypes.ERROR_REVIEW_MSG:
            return {
                ...reviewState,
                errMsg: action.payload
            }
        case actionTypes.LOAD_REVIEW:
            return {
                ...reviewState,
                reviews: action.payload
            }
    
        default:
            return reviewState;
    }
}

export const reducer = combineReducers({
    auth: userAuth,
    service: vehicleService,
    review: userReview
});