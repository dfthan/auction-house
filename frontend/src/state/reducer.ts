import { Product } from "../types";
import { State } from "./state";

// react.strictmode in index file causes action doubling in the reducer
export enum ActionType {
	ADD_PRODUCT = "ADD_PRODUCT",
	REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

interface ProductAction {
	type: ActionType;
	payload: Product;
}

export const reducer = (state: State, action: ProductAction) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return {
				...state,
				products: [...state.products, action.payload],
			};
		default:
			return state;
	}
};
