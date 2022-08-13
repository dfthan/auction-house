import { Product } from "../types";

export type State = {
	products: { [id: string]: Product };
	product: Product | null;
};
export const initialState: State = {
	products: {},
	product: null,
};
