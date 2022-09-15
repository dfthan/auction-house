import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import { setLogged } from "../state/loginSlice";
import { setModal } from "../state/modalSlice";
import { setNotification } from "../state/notificationSlice";
import { RootState } from "../state/store";
import "./NavbarStyles.css";

const Navbar = () => {
	const dispatch = useDispatch();
	const { logged } = useSelector((state: RootState) => state.logged);

	const logout = async () => {
		await fetch(`${API_URL}/logout`, {
			method: "POST",
			credentials: "include",
		});
		dispatch(setLogged(false));
		dispatch(
			setNotification({
				message: "Logged out successfully",
				color: "green",
			})
		);
	};

	if (logged) {
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
