import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import MultipleFileUploadField from '../upload/MultipleFileUploadFields';
import { productSchema } from '../../middlewares/validation';
import { ProductModel } from "../../interfaces/ProductModel";

const initialValues = {
	category: '',
	title: '',
	price: '',
	description: '',
	files: [],
	message: ''
};

const categories = [
	'please choose a category',
	'Chinese',
	'Nepali',
	'Indian',
	'Japanese',
	'Italian',
	'Continental',
	'mexican'
];

export default function CreateProduct() {
	const handleSubmit = async (values: any, actions: { resetForm: () => void; setErrors: (arg0: any) => void; }) => {
		try {

			const res = await axios.post('/api/products', { values });
			alert(res.data.message);
			if (res.status === 201) {
				actions.resetForm();

			}
		} catch (error) {
			if (error.response) {
				actions.setErrors(error.response.data);
			}
		}
	};

	return (
		<div className="ml-5 mt-5">
			<h3 className="text-lg font-semibold text-gray-700">Add Dishes</h3>

			<div>
				<Formik
					initialValues={initialValues}
					validationSchema={productSchema}
					onSubmit={handleSubmit}
					validateOnBlur={false}
				>
					{({ values, errors, isSubmitting }) => (
						<Form>
							<div className="w-full">
								<label htmlFor="category" className="block text-md text-gray-400">
									Category
								</label>
								<Field as="select" name="category" id="">
									{categories.map((c) => (
										<option key={c} value={c}>
											{c}
										</option>
									))}
								</Field>
								<div> {errors.category && errors.category}</div>
							</div>
							<div>
								<label htmlFor="title" className="block text-md text-gray-400">
									Title
								</label>
								<Field type="text" name="title" value={values.title} />
								<div> {errors.title && errors.title}</div>
							</div>
							<div>
								<label htmlFor="description" className="block text-md text-gray-400">
									Description
								</label>
								<Field type="text" name="description" value={values.description} as="textarea" />
								<div> {errors.description && errors.description}</div>
							</div>
							<div>
								<label htmlFor="price" className="block text-md text-gray-400">
									Price
								</label>
								<Field type="number" name="price" value={values.price} className="rounded-lg" />
								<div> {errors.price && errors.price}</div>
							</div>
							<div>
								<MultipleFileUploadField name="files" />
							</div>
							{errors && <p className="text-red-700">{errors.message}</p>}
							<button
								type="submit"
								disabled={isSubmitting}
								className="px-7 py-4 bg-yellow-300 hover:bg-yellow-600 rounded-lg mt-5 text-sm font-medium text-gray-700 hover:text-gray-900"
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div >
	);
}
