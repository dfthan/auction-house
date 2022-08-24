import { reducerAction } from "./state";

export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	user_id: number;
	created_at: string;
	updated_at: string;
}

export interface Logged {
	logged: boolean;
	dispatch: React.Dispatch<reducerAction>;
}

export interface Modal {
	modal: string;
	dispatch: React.Dispatch<reducerAction>;
}
