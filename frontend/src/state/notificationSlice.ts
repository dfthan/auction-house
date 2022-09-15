import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface notificationState {
	notification: {
		message: string | null;
		color?: string | undefined;
	};
}

const initialState: notificationState = {
	notification: { message: null, color: undefined },
};

export const modalSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		setNotification: (
			state,
			action: PayloadAction<{
				message: string | null;
				color?: string | undefined;
			}>
		) => {
			state.notification = action.payload;
		},
	},
});

export const { setNotification } = modalSlice.actions;
export default modalSlice.reducer;
