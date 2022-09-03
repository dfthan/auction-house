import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Footer from "../Footer";
import Modal from "../Modal";
import ProductCard from "../ProductCard";
import "./index.css";

const LandingPage = () => {
	const { modal } = useSelector((state: RootState) => state.modal);
	const modalState = () => {
		if (modal !== "closed") {
			return <Modal />;
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
				<ProductCard />
			</div>
			<Footer />
		</div>
	);
};
export default LandingPage;
