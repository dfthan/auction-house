import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../state/notificationSlice";
import { RootState } from "../../state/store";
import "./index.css";

const NotificationMessage = () => {
	const dispatch = useDispatch();
	const { notification } = useSelector(
		(state: RootState) => state.notification
	);
	if (notification.message === null) {
		return null;
	}

	return (
		<div className="notification-container">
			<div
				key={notification.message}
				className="notification"
				onClick={() => dispatch(setNotification({ message: null }))}
				style={{
					backgroundColor: `${notification.color}`,
				}}
			>
				<p>{notification.message}</p>
			</div>
		</div>
	);
};

export default NotificationMessage;
