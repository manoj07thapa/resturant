import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Formik, useFormikContext, Field } from 'formik';
import * as yup from 'yup';
import router, { useRouter } from 'next/router';
import { getAsString } from '../../utils/getAsString';

const ValueChangeListener = () => {
	const { submitForm, values } = useFormikContext();
	const { value } = values;

	useEffect(
		() => {
			if (values) {
				submitForm();
			}
		},
		[ values, submitForm ]
	);

	return null;
};

const submitMyForm = (values) => {
	router.push(
		{
			pathname: '/products',
			query: { ...values, page: 1 }
		},
		undefined,
		{ shallow: true }
	);
};

const TestFilters = ({ categories }) => {
	const { query } = useRouter();

	const initialValues = {
		category: query.category
	};
	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={submitMyForm}>
				{({ values, handleChange, errors }) => {
					return (
						<div>
							<div className="px-4 py-4 border-t border-gray-200 lg:border-l">
								<span className="block text-sm font-semibold text-gray-500">Category</span>
								{categories.map((c) => (
									<div className="sm:flex sm:-mx-2 lg:block lg:mx-0 " key={c._id}>
										<label
											htmlFor=""
											className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0"
										>
											<Field
												type="checkbox"
												className="bg-gray-900 rounded"
												value={c._id}
												name="category"
												onChange={handleChange}
											/>
											<span className="ml-2 text-gray-400">{c._id}</span>
										</label>
									</div>
								))}
							</div>
							<ValueChangeListener />
						</div>
					);
				}}
			</Formik>
		</div>
	);
};

export default TestFilters;
