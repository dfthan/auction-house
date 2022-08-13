import { useReducer } from "react";
import { initialState, reducer } from "../../state";
import "./ProductCardStyles.css";

const ProductCard = () => {
	const [state] = useReducer(reducer, initialState);
	console.log(state);

	return <></>;
	/*
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
	*/
};

export default ProductCard;
