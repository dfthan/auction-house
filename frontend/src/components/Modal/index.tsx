import React from "react";
import AddProductPage from "../AddProductPage";
import "./index.css";

const Modal = ({
	setModal,
}: {
	setModal: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
	return (
		<div className="modal" onClick={() => setModal(false)}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<span className="close-button" onClick={() => setModal(false)}>
					&times;
				</span>
				<AddProductPage />
			</div>
		</div>
	);
};

export default Modal;
