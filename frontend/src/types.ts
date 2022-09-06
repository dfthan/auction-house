export interface baseProduct {
	name: string;
	price: number;
	description: string;
	image: string;
}

export interface Product extends baseProduct {
	id: number;
	user_id: number;
	created_at: string;
	updated_at: string;
}

export interface productData {
	name: string;
	price: string;
	description: string;
	image: string;
}
