import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../../state/index";
import Footer from "../Footer";
import Modal from "../Modal";
import ProductCard from "../ProductCard";

const LandingPage = () => {
	const [{ products }, dispatch] = useReducer(reducer, initialState);
	const [modal, setModal] = useState<Boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch("http://localhost:3001/api/products");
			const data = await resp.json();
			dispatch({ type: "SET_PRODUCT_LIST", payload: data });
		};
		fetchData();
	}, []);

	return (
		<div className="wrapper">
			<h1>Front page (for now) </h1>
			<h1>Search bar goes here</h1>
			<button onClick={() => setModal(true)}>Add your own product</button>
			{modal && <Modal setModal={setModal} />}
			<ProductCard product={products} />
			<Footer />
		</div>
	);
};
export default LandingPage;
