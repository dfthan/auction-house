import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface notificationState {
	notification: string | null;
}

const initialState: notificationState = {
	notification: "Account created succesfully!",
};

export const modalSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		setNotification: (state, action: PayloadAction<string | null>) => {
			state.notification = action.payload;
		},
	},
});

export const { setNotification } = modalSlice.actions;
export default modalSlice.reducer;
