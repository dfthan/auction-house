import React from "react";
import { Logged, Modal, Product } from "../types";

export type State = {
	products: Product[];
	logged: Logged;
	modal: Modal;
};
export const initialState: State = {
	products: [],
	logged: { logged: false, dispatch: () => {} },
	modal: { modal: "closed", dispatch: () => {} },
};

export const loggedContext = React.createContext(initialState.logged);
export const modalContext = React.createContext(initialState.modal);
