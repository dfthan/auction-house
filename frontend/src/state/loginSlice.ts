import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
	logged: boolean;
}

export const loginSlice = createSlice({
	name: "login",
	initialState: {
		logged: false,
	},
	reducers: {
		setLogged: (state: LoginState, action: PayloadAction<boolean>) => {
			state.logged = action.payload;
		},
	},
});

export const { setLogged } = loginSlice.actions;
export default loginSlice.reducer;
