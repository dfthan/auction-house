import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddProductFormStyles.css";

const AddProductForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			price: "",
			description: "",
			image: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Name is required"),
			price: Yup.string().required("Price is required"),
			description: Yup.string().required("Description is required"),
			//image: Yup.string().required("Image is required"),
		}),
		onSubmit: async (values) => {
			console.log(values);
			const response = await fetch("http://localhost:3001/api/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify(values),
			});
			console.log(response);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				name="name"
				onChange={formik.handleChange}
				value={formik.values.name}
				autoComplete="off"
			/>
			{formik.touched.name && formik.errors.name ? (
				<div className="error">{formik.errors.name}</div>
			) : null}
			<label htmlFor="price">Price</label>
			<input
				id="price"
				name="price"
				onChange={formik.handleChange}
				value={formik.values.price}
			/>
			{formik.touched.price && formik.errors.price ? (
				<div className="error">{formik.errors.price}</div>
			) : null}
			<label htmlFor="description">Description</label>
			<input
				id="description"
				name="description"
				onChange={formik.handleChange}
				value={formik.values.description}
				autoComplete="off"
			/>
			{formik.touched.description && formik.errors.description ? (
				<div className="error">{formik.errors.description}</div>
			) : null}
			<label htmlFor="image">Image</label>
			<input
				id="image"
				name="image"
				onChange={formik.handleChange}
				value={formik.values.image}
			/>
			{formik.touched.image && formik.errors.image ? (
				<div className="error">{formik.errors.image}</div>
			) : null}
			<button type="submit">Add Product</button>
		</form>
	);
};

export default AddProductForm;
