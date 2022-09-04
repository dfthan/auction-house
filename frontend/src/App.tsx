import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SingleProductPage from "./components/SingleProductPage";
import { API_URL } from "./constants";
import { setLogged } from "./state/loginSlice";
import { setProductList } from "./state/productSlice";

const App = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState<Boolean>(true);
	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch(`${API_URL}/products`);
			const data = await resp.json();
			dispatch(setProductList(data));
		};
		fetchData();
	}, [dispatch]);
	useEffect(() => {
		const fetchLoggedIn = async () => {
			const response = await fetch(`${API_URL}/status`, {
				method: "GET",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.status === 200) {
				dispatch(setLogged(true));
			}
			setLoading(false);
		};
		fetchLoggedIn();
	}, [dispatch]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/:id" element={<SingleProductPage />} />
			</Routes>
		</>
	);
};

export default App;
