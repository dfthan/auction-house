import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../state/notificationSlice";
import { RootState } from "../../state/store";
import "./index.css";

const NotificationMessage = () => {
	const dispatch = useDispatch();
	const { notification } = useSelector(
		(state: RootState) => state.notification
	);
	if (notification === null) {
		return null;
	}

	return (
		<div className="notification-container">
			<div
				className="notification"
				onClick={() => dispatch(setNotification(null))}
			>
				<p>{notification}</p>
			</div>
		</div>
	);
};

export default NotificationMessage;
