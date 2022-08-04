import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { Product } from "./types";

const App = () => {
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
		<div>
			<Navbar />
			<div>
				<div className="wrapper">
					<h1>Front page</h1>
					<ProductCard product={products} />
				</div>
			</div>
		</div>
	);
};

export default App;
