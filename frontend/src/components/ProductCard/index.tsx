import { Product } from "../../types";
import "./ProductCardStyles.css";

const ProductCard = ({ product }: { product: Product[] }) => {
	return (
		<div className="productWrapper">
			{product.map((product: Product) => (
				<div key={product.id} className="productContainer">
					<div className="productImage">
						<img src={product.image} alt="Product" />
					</div>
					<div className="productInfo">
						<h1>{product.name}</h1>
						<p>{product.description}</p>
						<p>{product.price} €</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
