import React from 'react';
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import { prodCatSchema } from '../../middlewares/prodCatSchema';
import axios from 'axios';

export default function AddCategory() {
	const initialValues = {
		productCategory: ''
	};

	const onSubmit = async (values, actions) => {
		try {
			await axios.put('/api/products/category', { values });
			// actions.resetForm();
		} catch (error) {
			if (error.response) {
				actions.setFieldError(error.response.data.params.path, error.response.data.message);
			}
		}
	};
	return (
		<div className="mt-7 max-w-md mx-auto">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={prodCatSchema}>
				{({ errors, isSubmitting, values }) => (
					<Form>
						<label htmlFor="productCategory w-full">
							<span className="block text-lg font-semibold text-gray-500 mb-2">Add product category</span>
							<Field
								name="productCategory"
								type="text"
								id="productCategory"
								className={`${errors.productCategory
									? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
									: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
							/>
							<div className="text-red-500 text-xs mt-1">
								{errors.productCategory && errors.productCategory}
							</div>
						</label>

						<div className="mt-2  text-right ">
							<button
								type="submit"
								className="uppercase tracking-wider focus:outline-none px-4 py-2 bg-gray-900 hover:bg-gray-700 text-medium text-white rounded-md"
							>
								Add category
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export function MinusOutlined() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
		</svg>
	);
}

export function PlusOutlined() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
