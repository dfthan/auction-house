import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import modalReducer from "./modalSlice";
import productReducer from "./productSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		logged: loginReducer,
		products: productReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
