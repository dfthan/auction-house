import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Product } from "../../types";
import Footer from "../Footer";
import Modal from "../Modal";
import ProductCard from "../ProductCard";
import Searchbar from "../Searchbar";
import "./index.css";

const LandingPage = () => {
	const [search, setSearch] = useState<string>("");
	const { modal } = useSelector((state: RootState) => state.modal);
	const { products } = useSelector((state: RootState) => state.products);
	const modalState = () => {
		if (modal !== "closed") {
			return <Modal />;
		}
		return null;
	};
	console.log(search);

	const filteredProducts = products.filter((product: Product) => {
		return product.name.toLowerCase().includes(search);
	});

	return (
		<div className="wrapper">
			<div className="content-wrapper">
				<h1>Front page (for now) </h1>
				<Searchbar setSearch={setSearch} />
				{modalState()}
				<ProductCard products={filteredProducts} />
			</div>
			<Footer />
		</div>
	);
};
export default LandingPage;
