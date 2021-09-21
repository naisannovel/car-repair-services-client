import { combineReducers } from "redux";
import { vehicleService } from "./serviceActionCreators";
import { userReview } from "./reviewActionCreators";
import { userTakenService } from "./cartActionCreators";
import { userAuth } from "./authActionCreators";


export const reducer = combineReducers({
    auth: userAuth,
    service: vehicleService,
    review: userReview,
    myService: userTakenService
});