import authReducer from "./authSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	userAuth: authReducer,
});

export default rootReducer;
