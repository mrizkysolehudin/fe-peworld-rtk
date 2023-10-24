import { baseUrl } from "@/helpers/baseUrl";
import http from "@/helpers/http";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
	isLogout: false,
	isLogin: false,
	user_id: null,
	token: null,
};

export const loginAction = createAsyncThunk(
	"users/login",
	async (data, { rejectWithValue }) => {
		try {
			if (data.email === "" || data.password === "") {
				Swal.fire({
					title: "Input error",
					text: "Please, input your email and password!",
					icon: "error",
				});

				return rejectWithValue("Please, input your email and password!");
			}

			const response = await http().post(`${baseUrl}/user/login`, data);
			localStorage.setItem("peworld_token", response.data.data.token);
			localStorage.setItem("peworld_user_id", response.data.data.user_id);
			localStorage.setItem("peworld_role", response.data.data.role);

			Swal.fire({
				title: "Login success",
				text: "Congratulations! You are now logged in.",
				icon: "success",
			});

			return response.data.data;
		} catch (error) {
			Swal.fire({
				title: "Login error",
				text: "Wrong password or email. Please try again.",
				icon: "error",
			});
			return rejectWithValue(error.message);
		}
	},
);

const authSlice = createSlice({
	name: "users/auth",
	initialState,
	reducers: {
		logoutAction: (state) => {
			localStorage.clear();

			state.isLogin = false;
			state.token = null;
			state.user_id = null;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(loginAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(loginAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isLogin = true;
			state.token = action?.payload?.token;
			state.user_id = action?.payload?.user_id;
		});

		builder.addCase(loginAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.errMessage = action?.payload;
		});
	},
});

export const { logoutAction } = authSlice.actions;

export default authSlice.reducer;
