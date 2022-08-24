import { Product } from "../types";
import { State } from "./state";

// react.strictmode in index file causes action doubling in the reducer

export type reducerAction =
	| { type: "SET_PRODUCT_LIST"; payload: Product[] }
	| { type: "SINGLE_PRODUCT"; payload: Product }
	| { type: "SET_LOGGED"; payload: any };

export const reducer = (state: State, action: reducerAction) => {
	console.log(action);
	switch (action.type) {
		case "SET_PRODUCT_LIST":
			return {
				...state,
				products: action.payload,
			};
		case "SET_LOGGED":
			return {
				...state,
				logged: action.payload,
			};
		default:
			return state;
	}
};
