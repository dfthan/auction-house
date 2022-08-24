import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { API_URL } from "../../constants";
import { loggedContext, modalContext } from "../../state";

const LoginForm = ({}: {}) => {
	const modalCont = useContext(modalContext);
	const context = useContext(loggedContext);
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
				modalCont.dispatch({ type: "SET_MODAL", payload: "closed" });
				context.dispatch({ type: "SET_LOGGED", payload: true });
			} else {
				alert("Login failed!");
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
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
