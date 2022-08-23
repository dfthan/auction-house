import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import "./NavbarStyles.css";

const Navbar = ({
	logged,
	setModal,
	setLogged,
}: {
	logged: Boolean;
	setLogged: React.Dispatch<SetStateAction<Boolean>>;
	setModal: React.Dispatch<SetStateAction<string>>;
}) => {
	const logout = async () => {
		await fetch(`${API_URL}/logout`, {
			method: "POST",
			credentials: "include",
		});
		setLogged(false);
	};

	if (logged) {
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
