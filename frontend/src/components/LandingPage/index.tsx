import { useState } from "react";
import { Product } from "../../types";
import Footer from "../Footer";
import Modal from "../Modal";
import ProductCard from "../ProductCard";
import "./index.css";

const LandingPage = ({ products }: { products: Product[] }) => {
	const [modal, setModal] = useState<Boolean>(false);

	return (
		<div className="wrapper">
			<h1>Front page (for now) </h1>
			<div className="search-container">
				<input
					type="input"
					placeholder="Search"
					name="search"
					id="search"
				/>
				<label>Search</label>
			</div>
			<button id="add-button" onClick={() => setModal(true)}>
				Add product
			</button>
			{modal && <Modal setModal={setModal} />}
			<ProductCard product={products} />
			<Footer />
		</div>
	);
};
export default LandingPage;
