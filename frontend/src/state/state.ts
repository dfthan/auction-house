import { Product } from "../types";

export type State = {
	products: Product[];
	//product: Product | null;
};
export const initialState: State = {
	products: [],
	//product: null,
};
