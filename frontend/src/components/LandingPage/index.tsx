import { useEffect, useState } from "react";
import { Product } from "../../types";
import ProductCard from "../ProductCard";

const LandingPage = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch("http://localhost:3001/api/products");
			const data = await resp.json();
			setProducts(data);
		};
		fetchData();
	}, []);
	return (
		<div className="wrapper">
			<h1>Front page (for now) </h1>
			<ProductCard product={products} />
		</div>
	);
};

export default LandingPage;
