import { SetStateAction } from "react";
import AddProductForm from "../AddProductPage/AddProductForm";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import "./index.css";

const Modal = ({
	setModal,
	modal,
	setLogged,
}: {
	setModal: React.Dispatch<SetStateAction<string>>;
	modal: string;
	setLogged: React.Dispatch<SetStateAction<Boolean>>;
}) => {
	const renderModal = () => {
		switch (modal) {
			case "addProduct":
				return <AddProductForm />;
			case "register":
				return <RegisterForm />;
			case "login":
				return <LoginForm setModal={setModal} setLogged={setLogged} />;
			default:
				return null;
		}
	};

	return (
		<div className="modal" onClick={() => setModal("closed")}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<span
					className="close-button"
					onClick={() => setModal("closed")}
				>
					&times;
				</span>
				{renderModal()}
			</div>
		</div>
	);
};

export default Modal;
