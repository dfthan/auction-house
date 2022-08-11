import { Product } from "../types";

export type State = {
	products: Product[];
};
export const initialState: State = {
	products: [],
};
