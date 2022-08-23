import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import "./NavbarStyles.css";

const Navbar = ({
	logged,
	setModal,
}: {
	logged: boolean;
	setModal: React.Dispatch<SetStateAction<Boolean>>;
}) => {
	const logout = async () => {
		await fetch(`${API_URL}/logout`, {
			method: "POST",
			credentials: "include",
		});
		window.location.reload();
	};

	if (logged) {
		return (
			<header>
				<nav className="navContainer">
					<Link to="/" onClick={() => setModal(true)}>
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
				<Link to="/" onClick={() => setModal(true)}>
					Register
				</Link>
				<Link to="/login">Login</Link>
			</nav>
		</header>
	);
};

export default Navbar;
