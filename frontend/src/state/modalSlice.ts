import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
	modal: string;
}

const initialState: ModalState = {
	modal: "closed",
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setModal: (state, action: PayloadAction<string>) => {
			state.modal = action.payload;
		},
	},
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
