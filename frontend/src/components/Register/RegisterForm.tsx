import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { API_URL } from "../../constants";
import { setModal } from "../../state/modalSlice";
import { setNotification } from "../../state/notificationSlice";

const RegisterForm = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Username is required"),
			email: Yup.string()
				.email("Email is invalid")
				.required("Email is required"),
			password: Yup.string()
				.required("Password is required")
				.min(6, "Password must be at least 6 characters"),
			confirmPassword: Yup.string()
				.required("Confirm Password is required")
				.oneOf([Yup.ref("password"), null], "Passwords must match"),
		}),
		onSubmit: async (values) => {
			const response = await fetch(`${API_URL}/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (response.status === 200) {
				dispatch(setModal("closed"));
				dispatch(
					setNotification({
						message: "Registered successfully",
						color: "green",
					})
				);
				setTimeout(() => {
					dispatch(
						setNotification({ message: null, color: undefined })
					);
				}, 1000);
			} else {
				alert("Registration failed!");
			}
		},
	});
	return (
		<div>
			<h1>Register</h1>
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
					<label htmlFor="username">Username</label>
					<input
						id="username"
						name="username"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.username}
					/>
					{formik.touched.username && formik.errors.username ? (
						<div className="error">{formik.errors.username}</div>
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
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
					/>
					{formik.touched.confirmPassword &&
					formik.errors.confirmPassword ? (
						<div className="error">
							{formik.errors.confirmPassword}
						</div>
					) : null}
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;
