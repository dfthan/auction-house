import React from "react";
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
				<p>
					woapefkawpfkpawefkawepofkaeof kwaof aewpf waeofk
					waeofkpawoek afewpo k
				</p>
			</div>
		</div>
	);
};

export default Modal;
