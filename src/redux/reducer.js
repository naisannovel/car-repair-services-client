import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const userAuth = (userState = { userData: {token: null, data: null}, isLoading: false, errMsg: null }, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOADING:
            return {
                ...userState,
                isLoading: action.payload
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...userState,
                isLoading:false,
                userData:{
                    token:action.payload.token,
                    data: action.payload.data
                },
                errMsg: null,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...userState,
                isLoading:false,
                userData: {token: null, data: null},
                errMsg: action.payload,
            }
        default:
            return userState;
    }
};

export const reducer = combineReducers({
    auth: userAuth,
});