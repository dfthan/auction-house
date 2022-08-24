import React from "react";
import { Logged, Product } from "../types";

export type State = {
	products: Product[];
	logged: Logged;
};
export const initialState: State = {
	products: [],
	logged: { logged: false, dispatch: () => {} },
};

export const loggedContext = React.createContext(initialState.logged);
