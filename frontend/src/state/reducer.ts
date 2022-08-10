import { Product } from "../types";

// react.strictmode causes action doubling in the reducer

export const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case "REMOVE_PRODUCT":
			return {
				...state,
				products: state.products.filter(
					(product: Product) => product.id !== action.payload
				),
			};
		default:
			return state;
	}
};
