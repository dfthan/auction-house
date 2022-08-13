import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Product } from "../../types";
import "./SingleProductStyles.css";

const SingleProductPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<Product>();
	useEffect(() => {
		const fetchSingleProduct = async () => {
			const resp = await fetch(
				`http://localhost:3001/api/products/${id}`
			);
			const data = await resp.json();
			setProduct(data);
		};
		fetchSingleProduct();
	}, [id]);

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
					<h2>{product.name}</h2>
					<p>{product.price} €</p>
					<p>{product.description}</p>
					<div>
						<button>Buy</button>
						<button>Bid</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
