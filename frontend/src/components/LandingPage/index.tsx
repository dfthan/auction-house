import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../../state";
import ProductCard from "../ProductCard";

const LandingPage = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch("http://localhost:3001/api/products");
			const data = await resp.json();
			dispatch({ type: "ADD_PRODUCT", payload: data });
		};
		fetchData();
	}, []);
	console.log("reducer", state.products);
	return (
		<div className="wrapper">
			<h1>Front page (for now) </h1>
			<h1>Search bar goes here</h1>
			<ProductCard product={state.products} />
		</div>
	);
};

export default LandingPage;
