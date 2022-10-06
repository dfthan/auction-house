import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { API_URL } from "../../constants";
import { Product } from "../../types";
import "./SingleProductStyles.css";

const SingleProductPage = () => {
	const location = useLocation();
	const { product } = location.state as { product: Product };
	const [productSeller, setProductSeller] = useState<any>();

	useEffect(() => {
		const fetchProductSeller = async () => {
			const response = await fetch(
				` ${API_URL}/users/${product.user_id}`
			);
			const res = await response.json();
			setProductSeller(res);
		};
		fetchProductSeller();
	}, [product.user_id]);

	if (!product || !productSeller) {
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
					<div className="bottom-content">
						<div className="buttons">
							<button>Buy</button>
							<button>Bid</button>
						</div>
						<div className="poster-container">
							<p>Item posted by {productSeller.username}</p>
							<p>Member since {productSeller.created_at}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
