import { useFormik } from "formik";
import * as Yup from "yup";
import { API_URL } from "../../constants";

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
				.positive("Price can't be negative")
				.max(999999.99, "Price must be less than 999999.99"),
			description: Yup.string().required("Description is required"),
			image: Yup.mixed().required("Image is required"),
		}),
		onSubmit: async (values) => {
			console.log(values);
			const response = await fetch(`${API_URL}/products`, {
				method: "POST",
				credentials: "include",
				body: values,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			if (response.status === 201) {
				window.location.reload();
			}
		},
	});

	return (
		<div>
			<h1>Add a product</h1>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-container">
					<label htmlFor="name">Product name</label>
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
					<label htmlFor="description">Product description</label>
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
						type={"file"}
						onChange={formik.handleChange}
						value={formik.values.image}
					/>
					{formik.touched.image && formik.errors.image ? (
						<div className="error">{formik.errors.image}</div>
					) : null}
				</div>
				<button type="submit">Add product</button>
			</form>
		</div>
	);
};

export default AddProductForm;
