import { useContext } from "react";
import { modalContext } from "../../state";
import AddProductForm from "../AddProductPage/AddProductForm";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import "./index.css";

const Modal = () => {
	const modalCont = useContext(modalContext);
	const renderModal = () => {
		switch (modalCont.modal) {
			case "addProduct":
				return <AddProductForm />;
			case "register":
				return <RegisterForm />;
			case "login":
				return <LoginForm />;
			default:
				return null;
		}
	};

	return (
		<div
			className="modal"
			onClick={() =>
				modalCont.dispatch({ type: "SET_MODAL", payload: "closed" })
			}
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<span
					className="close-button"
					onClick={() =>
						modalCont.dispatch({
							type: "SET_MODAL",
							payload: "closed",
						})
					}
				>
					&times;
				</span>
				{renderModal()}
			</div>
		</div>
	);
};

export default Modal;
