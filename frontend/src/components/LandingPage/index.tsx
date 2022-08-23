import { SetStateAction } from "react";
import { Product } from "../../types";
import Footer from "../Footer";
import Modal from "../Modal";
import ProductCard from "../ProductCard";
import "./index.css";

const LandingPage = ({
	products,
	modal,
	setModal,
}: {
	products: Product[];
	modal: Boolean;
	setModal: React.Dispatch<SetStateAction<Boolean>>;
}) => {
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
			{modal && <Modal setModal={setModal} />}
			<ProductCard product={products} />
			<Footer />
		</div>
	);
};
export default LandingPage;
