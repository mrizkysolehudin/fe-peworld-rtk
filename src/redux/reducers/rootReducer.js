import authReducer from "./authSlice";
import userReducer from "./user/getOneUser";
import editUserReducer from "./user/editUserSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	userAuth: authReducer,
	user: userReducer,
	editUser: editUserReducer,
});

export default rootReducer;
