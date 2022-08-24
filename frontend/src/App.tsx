import { useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SingleProductPage from "./components/SingleProductPage";
import { API_URL } from "./constants";
import { initialState, loggedContext, reducer } from "./state";

const App = () => {
	const [loading, setLoading] = useState<Boolean>(true);
	const [modal, setModal] = useState<string>("closed");
	const [{ products, logged }, dispatch] = useReducer(reducer, initialState);
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
				dispatch({ type: "SET_LOGGED", payload: true });
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
			<loggedContext.Provider value={{ logged, dispatch }}>
				<Navbar setModal={setModal} />
				<Routes>
					<Route
						path="/"
						element={
							<LandingPage
								products={products}
								modal={modal}
								setModal={setModal}
							/>
						}
					/>
					<Route path="/:id" element={<SingleProductPage />} />
				</Routes>
			</loggedContext.Provider>
		</>
	);
};

export default App;
