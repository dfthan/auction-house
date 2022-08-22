import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import "./NavbarStyles.css";

const Navbar = ({ logged }: { logged: boolean }) => {
	const logout = async () => {
		console.log("logging out");
		await fetch(`${API_URL}/logout`);
		//window.location.reload();
	};

	if (logged) {
		return (
			<header>
				<nav className="navContainer">
					<Link to="/">Home</Link>
					<a onClick={() => logout()}>Log out</a>
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
