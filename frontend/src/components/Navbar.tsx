import { SetStateAction, useContext } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import { loggedContext } from "../state";
import "./NavbarStyles.css";

const Navbar = ({
	setModal,
}: {
	setModal: React.Dispatch<SetStateAction<string>>;
}) => {
	const context = useContext(loggedContext);
	const logout = async () => {
		await fetch(`${API_URL}/logout`, {
			method: "POST",
			credentials: "include",
		});
		context.dispatch({ type: "SET_LOGGED", payload: false });
	};

	if (context.logged) {
		return (
			<header>
				<nav className="navContainer">
					<Link to="/" onClick={() => setModal("addProduct")}>
						Add product
					</Link>
					<Link to="/">Home</Link>
					<Link to="/" onClick={() => logout()}>
						Log out
					</Link>
				</nav>
			</header>
		);
	}
	return (
		<header>
			<nav className="navContainer">
				<Link to="/">Home</Link>
				<Link to="/" onClick={() => setModal("register")}>
					Register
				</Link>
				<Link to="/" onClick={() => setModal("login")}>
					Login
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
