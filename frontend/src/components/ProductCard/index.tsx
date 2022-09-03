import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../state/store";
import { Product } from "../../types";
import "./ProductCardStyles.css";

const ProductCard = () => {
	const { products } = useSelector((state: RootState) => state.products);
	return (
		<div className="productWrapper">
			{products.map((product: Product) => (
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
