import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { API_URL } from "../../constants";

const RegisterForm = () => {
	const navigate = useNavigate();

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
				navigate("/");
			} else {
				alert("Registration failed!");
			}
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
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
			{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
				<div className="error">{formik.errors.confirmPassword}</div>
			) : null}
			<button type="submit">Register</button>
		</form>
	);
};

export default RegisterForm;
