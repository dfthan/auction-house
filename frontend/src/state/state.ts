import { Product } from "../types";

type State = {
	products: Product[];
};
export const initialState: State = {
	products: [],
};
