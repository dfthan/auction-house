import { useEffect, useReducer } from "react";
import { ActionType, initialState, reducer } from "../../state";
import ProductCard from "../ProductCard";

const LandingPage = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch("http://localhost:3001/api/products");
			const data = await resp.json();
			dispatch({ type: ActionType.ADD_PRODUCT, payload: data });
		};
		fetchData();
	}, []);

	return (
		<div className="wrapper">
			<h1>Front page (for now) </h1>
			<h1>Search bar goes here</h1>
			{state.products.map((product: any) => (
				<ProductCard key={product} product={product} />
			))}
		</div>
	);
};
export default LandingPage;
