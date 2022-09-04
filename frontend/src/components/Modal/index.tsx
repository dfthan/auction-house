import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../state/modalSlice";
import { RootState } from "../../state/store";
import AddProductForm from "../AddProductPage/AddProductForm";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import "./index.css";

const Modal = () => {
	const dispatch = useDispatch();
	const { modal } = useSelector((state: RootState) => state.modal);
	const renderModal = () => {
		switch (modal) {
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
		<div className="modal" onClick={() => dispatch(setModal("closed"))}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div>
					<span
						className="close-button"
						onClick={() => dispatch(setModal("closed"))}
					>
						&times;
					</span>
				</div>
				{renderModal()}
			</div>
		</div>
	);
};

export default Modal;
