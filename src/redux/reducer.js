import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const userAuth = (userState = { token: null, userData : {}, isLoading: false, errMsg: null }, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
    
        default:
            return userState;
    }
};

export const reducer = combineReducers({});