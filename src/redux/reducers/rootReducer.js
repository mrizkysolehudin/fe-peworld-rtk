import authReducer from "./authSlice";
import userReducer from "./user/getOneUser";
import editUserReducer from "./user/editUserSlice";
import addUserReducer from "./user/addUserSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	userAuth: authReducer,
	user: userReducer,
	editUser: editUserReducer,
	addUser: addUserReducer,
});

export default rootReducer;
