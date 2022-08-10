import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import SingleProductPage from "./components/SingleProductPage";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/:id" element={<SingleProductPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
