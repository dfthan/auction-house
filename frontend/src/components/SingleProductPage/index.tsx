import { useLocation } from "react-router";
import { Product } from "../../types";
import "./SingleProductStyles.css";

const SingleProductPage = () => {
	const location = useLocation();
	const { product } = location.state as { product: Product };
	console.log(product);

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<div className="product-wrapper">
			<div className="product">
				<div className="image-container">
					<img src={product.image} alt={product.name} />
				</div>
				<div className="text-container">
					<div className="product-text">
						<h2>{product.name}</h2>
						<p>{product.price} €</p>
						<p>{product.description}</p>
					</div>
					<div className="buttons">
						<button>Buy</button>
						<button>Bid</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
