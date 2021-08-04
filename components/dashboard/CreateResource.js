import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import MultipleFileUploadFields from '../upload/MultipleFileUploadFields';
import { resourceSchema } from '../../middlewares/resourceSchema';

const initialValues = {
	category: '',
	title: '',
	subtitle: '',
	subtitle1: '',
	subtitle2: '',
	files: [],
	description: ''
};

const categories = [ 'hero', 'popular', 'chefs special', 'Cat4', 'Cat5' ];

export default function CreateResource() {
	const handleSubmit = async (values, actions) => {
		try {
			const res = await axios.post('/api/resource', { values });
			alert(res.data.message);
			if (res.status === 201) {
				actions.resetForm();
			}
		} catch (error) {
			if (error.response) {
				actions.setFieldError(error.response.data.params.path, error.response.data.message);
			}
		}
	};

	return (
		<div className="max-w-md mx-auto mt-5">
			<h3 className="text-3xl font-bold text-gray-700 border-b border-gray-200 pb-1">Create a resource</h3>

			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validateOnBlur={false}
				validationSchema={resourceSchema}
			>
				{({ values, errors, isSubmitting, isValid }) => (
					<Form className="mt-5 space-y-4">
						<label htmlFor="category">
							<span className="block text-sm font-semibold text-gray-500 mb-1">Choose a category</span>
							<Field
								as="select"
								name="category"
								type="text"
								id="category"
								className={`${errors.category
									? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
									: 'rounded-md placeholder-gray-300 w-full focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
							>
								{categories.map((c) => (
									<option key={c} value={c}>
										{c}
									</option>
								))}
							</Field>
							<div className="text-red-500 text-xs mt-1">{errors.category && errors.category}</div>
						</label>
						<div className="mt-3">
							<label htmlFor="title">
								<span className="block text-sm font-semibold text-gray-500 mb-1">Title</span>
								<Field
									name="title"
									type="text"
									id="title"
									values={values.title}
									className={`${errors.title
										? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
										: 'rounded-md placeholder-gray-300 w-full focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
								/>
								<div className="text-red-500 text-xs mt-1">{errors.title && errors.title}</div>
							</label>
						</div>
						<div className="mt-3">
							<label htmlFor="title">
								<span className="block text-sm font-semibold text-gray-500 mb-1">Sub-Title</span>
								<Field
									name="subtitle"
									type="text"
									id="subtitle"
									values={values.subtitle}
									className={`${errors.subtitle
										? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
										: 'rounded-md placeholder-gray-300 w-full focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
								/>
								<div className="text-red-500 text-xs mt-1">{errors.subtitle && errors.subtitle}</div>
							</label>
						</div>
						<div className="mt-3">
							<label htmlFor="subtitle1">
								<span className="block text-sm font-semibold text-gray-500 mb-1">Sub-Title-1</span>
								<Field
									name="subtitle1"
									type="text"
									id="subtitle1"
									values={values.subtitle1}
									className={`${errors.subtitle1
										? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
										: 'rounded-md placeholder-gray-300 w-full focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
								/>
								<div className="text-red-500 text-xs mt-1">{errors.subtitle1 && errors.subtitle1}</div>
							</label>
						</div>
						<div className="mt-3">
							<label htmlFor="subtitle1">
								<span className="block text-sm font-semibold text-gray-500 mb-1">Sub-Title-2</span>
								<Field
									name="subtitle2"
									type="text"
									id="subtitle2"
									values={values.subtitle2}
									className={`${errors.subtitle2
										? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
										: 'rounded-md placeholder-gray-300 w-full focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
								/>
								<div className="text-red-500 text-xs mt-1">{errors.subtitle2 && errors.subtitle2}</div>
							</label>
						</div>

						<div className="mt-3">
							<MultipleFileUploadFields name="files" />
						</div>
						<div className="mt-3">
							<label htmlFor="description" className="">
								<span className="block text-sm font-semibold text-gray-500 mb-1">Description</span>
								<Field
									name="description"
									type="text"
									id="description"
									as="textarea"
									rows="4"
									className={`${errors.description
										? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
										: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
								/>
								<div className="text-red-500 text-xs mt-1">
									{errors.description && errors.description}
								</div>
							</label>
						</div>
						<div className="py-12 mt-32">
							<button
								type="submit"
								disabled={isSubmitting || !isValid}
								className="px-7 py-4 bg-gray-900 uppercase tracking-wider hover:bg-gray-700 rounded-md  text-medium font-medium text-white w-full"
							>
								Submit
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
