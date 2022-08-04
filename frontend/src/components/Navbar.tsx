import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
	return (
		<>
			<header>
				<nav className="navContainer">
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
