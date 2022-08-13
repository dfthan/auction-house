import { Link } from "react-router-dom";
import { Product } from "../../types";
import "./ProductCardStyles.css";

const ProductCard = ({ product }: any) => {
	return (
		<div className="productWrapper">
			{product.map((product: Product) => (
				<div key={product.id} className="productContainer">
					<Link to={`/${product.id}`}>
						<div className="productImage">
							<img src={product.image} alt="Product" />
						</div>
						<div className="productInfo">
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<p>{product.price} €</p>
						</div>

						<div>00:00:00</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
