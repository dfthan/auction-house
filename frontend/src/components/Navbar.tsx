import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import { loggedContext, setModal } from "../state";
import "./NavbarStyles.css";

const Navbar = ({}: {}) => {
	const dispatch = useDispatch();
	const loginContext = useContext(loggedContext);

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
						onClick={() => dispatch(setModal("addProduct"))}
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
				<Link to="/" onClick={() => dispatch(setModal("register"))}>
					Register
				</Link>
				<Link to="/" onClick={() => dispatch(setModal("login"))}>
					Login
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
