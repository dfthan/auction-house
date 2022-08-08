import { Product } from "../../types";
import "./ProductCardStyles.css";

const ProductCard = ({ product }: { product: Product[] }) => {
	return (
		<div className="productWrapper">
			{product.map(({ id, image, name, description, price }: Product) => (
				<div key={id} className="productContainer">
					<div className="productImage">
						<img src={image} alt="Product" />
					</div>
					<div className="productInfo">
						<h3>{name}</h3>
						<p>{description}</p>
						<p>{price} €</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
