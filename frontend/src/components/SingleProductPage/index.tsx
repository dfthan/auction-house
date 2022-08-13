import { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { initialState, reducer } from "../../state";

const SingleProductPage = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { id } = useParams();
	useEffect(() => {
		const fetchSingleProduct = async () => {
			const resp = await fetch(
				`http://localhost:3001/api/products/${id}`
			);
			const data = await resp.json();
			dispatch({ type: "SINGLE_PRODUCT", payload: data });
		};
		fetchSingleProduct();
	}, []);

	console.log("single", state);
	return <div></div>;
};

export default SingleProductPage;
