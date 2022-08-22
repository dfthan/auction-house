import { useState } from "react";
import Footer from "../Footer";
import Modal from "../Modal";
import ProductCard from "../ProductCard";

const LandingPage = ({ products }: any) => {
	const [modal, setModal] = useState<Boolean>(false);

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
