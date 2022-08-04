import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<BrowserRouter>
		<Navbar />

		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/:id" element={<App />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	</BrowserRouter>
);
