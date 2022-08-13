import { Product } from "../types";
import { State } from "./state";

// react.strictmode in index file causes action doubling in the reducer

export type reducerAction =
	| { type: "SET_PRODUCT_LIST"; payload: Product[] }
	| { type: "SINGLE_PRODUCT"; payload: Product };

export const reducer = (state: State, action: reducerAction) => {
	switch (action.type) {
		case "SET_PRODUCT_LIST":
			return {
				...state,
				products: action.payload.reduce(
					(products, product) => ({
						...products,
						[product.id]: product,
					}),
					{}
				),
			};
		case "SINGLE_PRODUCT":
			return {
				...state,
				product: action.payload,
			};
		default:
			return state;
	}
};
