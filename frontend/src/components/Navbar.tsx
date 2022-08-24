import { useContext } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import { loggedContext, modalContext } from "../state";
import "./NavbarStyles.css";

const Navbar = ({}: {}) => {
	const loginContext = useContext(loggedContext);
	const modal = useContext(modalContext);

	const logout = async () => {
		await fetch(`${API_URL}/logout`, {
			method: "POST",
			credentials: "include",
		});
		loginContext.dispatch({ type: "SET_LOGGED", payload: false });
	};

	if (loginContext.logged) {
		return (
			<header>
				<nav className="navContainer">
					<Link
						to="/"
						onClick={() =>
							modal.dispatch({
								type: "SET_MODAL",
								payload: "addProduct",
							})
						}
					>
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
				<Link
					to="/"
					onClick={() =>
						modal.dispatch({
							type: "SET_MODAL",
							payload: "register",
						})
					}
				>
					Register
				</Link>
				<Link
					to="/"
					onClick={() =>
						modal.dispatch({ type: "SET_MODAL", payload: "login" })
					}
				>
					Login
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
