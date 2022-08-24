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
	modal: string;
	setModal: React.Dispatch<SetStateAction<string>>;
}) => {
	const modalState = () => {
		if (modal !== "closed") {
			return <Modal modal={modal} setModal={setModal} />;
		}
		return null;
	};

	return (
		<div className="wrapper">
			<div className="content-wrapper">
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
				{modalState()}
				<ProductCard product={products} />
			</div>
			<Footer />
		</div>
	);
};
export default LandingPage;
