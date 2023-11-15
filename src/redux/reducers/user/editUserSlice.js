import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import http from "@/helpers/http";
import { baseUrl } from "@/helpers/baseUrl";

const resetEditUser = createAction("user/reset/editUser");

export const editUserAction = createAsyncThunk(
	"user/editUser",
	async ({ data, image, router }, { rejectWithValue, dispatch }) => {
		try {
			// const token = localStorage.setItem("peworld_token");
			const user_id = localStorage.getItem("peworld_user_id");
			const role = localStorage.getItem("peworld_role");

			if (data.name === "") {
				Swal.fire({
					name: "Input error",
					text: "Please, input name",
					icon: "error",
				});

				return rejectWithValue("Please, input name");
			}

			const formData = new FormData();
			formData.append("user_id", user_id);
			formData.append("role", role);
			formData.append("name", data?.name);
			formData.append("email", data?.email);
			formData.append("phone", data?.phone ?? "");
			formData.append("photo", image);
			formData.append("region", data?.region ?? "");
			formData.append("job_title", data?.job_title ?? "");
			formData.append("company", data?.company ?? "");
			formData.append("company_field", data?.company_field ?? "");
			formData.append("instagram", data?.instagram ?? "");
			formData.append("linkedin", data?.linkedin ?? "");
			formData.append("description", data?.description ?? "");

			const response = await http().put(`${baseUrl}/user/${user_id}`, formData);

			if (response.data.data) {
				Swal.fire({
					name: "Edit user success",
					text: "Congratulations!",
					icon: "success",
				});
				router.push(`/profile/${user_id}`);
				// setTimeout(() => {
				// 	window.location.reload();
				// }, 1000);

				dispatch(resetEditUser());
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				name: "Edit user error",
				text: "Please try again later...",
				icon: "error",
			});

			return rejectWithValue("Edit user error");
		}
	},
);

const editRecipeSlice = createSlice({
	name: "editUser",
	initialState: {
		isEdited: false,
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(editUserAction.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(resetEditUser, (state, action) => {
			state.isEdited = true;
		});

		builder.addCase(editUserAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isEdited = false;
		});

		builder.addCase(editUserAction.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = action?.payload;
		});
	},
});

export default editRecipeSlice.reducer;
