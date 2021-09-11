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

export const reducer = combineReducers({
    auth: userAuth,
});