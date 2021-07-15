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

const categories = ['please choose a category', 'hero', 'popular', 'chefs special', 'Cat4', 'Cat5'];

export default function CreateResource() {
	const handleSubmit = async (values: any, actions: any) => {

		try {
			const res = await axios.post('/api/resource/create', values);
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
			<h3 className="text-lg font-semibold text-gray-700">Add Resource</h3>

			<div>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validateOnBlur={false}
					validationSchema={resourceSchema}
				>
					{({ values, errors, isSubmitting }) => (
						<Form>
							<div className="w-full">
								<label htmlFor="category" className="block text-md text-gray-400">
									Category
								</label>
								<Field as="select" name="category" id="category">
									{categories.map((c) => (
										<option key={c} value={c}>
											{c}
										</option>
									))}
								</Field>
							</div>
							<div>
								<label htmlFor="title">Title</label>
								<Field type="text" name="title" value={values.title} />
								{errors && <p>{errors.title}</p>}
							</div>
							<div>
								<label htmlFor="subtitle">SubTitle</label>
								<Field type="text" name="subtitle" value={values.subtitle} />
								{errors && <p>{errors.subtitle}</p>}
							</div>
							<div>
								<label htmlFor="subtitle1">SubTitle1</label>
								<Field type="text" name="subtitle1" value={values.subtitle1} />
								{errors && <p>{errors.subtitle1}</p>}
							</div>
							<div>
								<label htmlFor="subtitle2">SubTitle2</label>
								<Field type="text" name="subtitle2" value={values.subtitle2} />
								{errors && <p>{errors.subtitle2}</p>}
							</div>

							<div>
								<MultipleFileUploadFields name="files" />
							</div>
							<div>
								<label htmlFor="description">Description</label>
								<Field type="text" name="description" value={values.description} as="textarea" />
								{errors && <p>{errors.description}</p>}
							</div>

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
		</div>
	);
}
