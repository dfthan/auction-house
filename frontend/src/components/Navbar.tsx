import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import "./NavbarStyles.css";

const Navbar = ({ logged }: { logged: boolean }) => {
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
				<Link to="/register">Register</Link>
				<Link to="/login">Login</Link>
			</nav>
		</header>
	);
};

export default Navbar;
