import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { API_URL } from "../../constants";
import { setLogged } from "../../state/loginSlice";
import { setModal } from "../../state/modalSlice";
import { setNotification } from "../../state/notificationSlice";

const LoginForm = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Email is invalid")
				.required("Email is required"),
			password: Yup.string().required("Password is required"),
		}),
		onSubmit: async (values) => {
			const response = await fetch(`${API_URL}/login`, {
				credentials: "include",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (response.status === 200) {
				dispatch(setLogged(true));
				dispatch(setModal("closed"));
				dispatch(
					setNotification({
						message: "Logged in successfully",
						color: "green",
					})
				);
			} else {
				alert("Login failed!");
			}
		},
	});
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-container">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="error">{formik.errors.email}</div>
					) : null}
					<label htmlFor="password">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className="error">{formik.errors.password}</div>
					) : null}
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
