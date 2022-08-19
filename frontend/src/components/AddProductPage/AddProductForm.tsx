import { useFormik } from "formik";
import * as Yup from "yup";
import { API_URL } from "../../constants";
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
			price: Yup.number()
				.required("Price is required")
				.positive("Price must be a positive number")
				.max(999999.99, "Price must be less than 999999.99"),
			description: Yup.string().required("Description is required"),
			//image: Yup.string().required("Image is required"), <-- make proper validation & add image upload
		}),
		onSubmit: async (values) => {
			console.log(values);
			const response = await fetch(`${API_URL}/products`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify(values),
			});
			if (response.status === 201) {
				window.location.reload();
			}
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
				type="number"
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
