import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";

export interface ProductState {
	products: Product[];
}

const initialState: ProductState = {
	products: [],
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProductList: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload;
		},
	},
});

export const { setProductList } = productSlice.actions;
export default productSlice.reducer;
