import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { API_URL } from "../../constants";
import { productData } from "../../types";

const AddProductForm = () => {
	const [file, setFile] = useState({} as File);
	let productData: productData;
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
				.max(999999.99, "Price must be less than a million!"),
			description: Yup.string().required("Description is required"),
			image: Yup.mixed().required("Image is required"),
		}),
		onSubmit: async (values) => {
			const formData = new FormData();
			formData.append("image", file);

			const imagefetch = await fetch(`${API_URL}/images`, {
				method: "POST",
				credentials: "include",
				body: formData,
			});
			if (imagefetch.status === 200) {
				const imagedata = await imagefetch.json();
				productData = {
					name: values.name,
					price: values.price,
					description: values.description,
					image: `${API_URL}/images/` + imagedata.imagefilename,
				};
			} else {
				return alert("Error");
			}
			const response = await fetch(`${API_URL}/products`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(productData),
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
						type="file"
						id="image"
						name="image"
						onChange={(e) => {
							if (e.currentTarget.files)
								setFile(e.currentTarget.files[0]);
							formik.setFieldValue(
								"image",
								e.currentTarget.value
							);
						}}
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
