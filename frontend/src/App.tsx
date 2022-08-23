import { useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SingleProductPage from "./components/SingleProductPage";
import { API_URL } from "./constants";
import { initialState, reducer } from "./state";

const App = () => {
	const [logged, setLogged] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(true);
	const [modal, setModal] = useState<string>("closed");
	const [{ products }, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch(`${API_URL}/products`);
			const data = await resp.json();
			dispatch({ type: "SET_PRODUCT_LIST", payload: data });
		};
		fetchData();
	}, []);
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
				setLogged(true);
			}
			setLoading(false);
		};
		fetchLoggedIn();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Navbar logged={logged} setModal={setModal} setLogged={setLogged} />
			<Routes>
				<Route
					path="/"
					element={
						<LandingPage
							products={products}
							modal={modal}
							setModal={setModal}
							setLogged={setLogged}
						/>
					}
				/>
				<Route path="/:id" element={<SingleProductPage />} />
			</Routes>
		</>
	);
};

export default App;
