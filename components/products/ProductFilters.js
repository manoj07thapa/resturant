import { useEffect, useState } from 'react';
import { Formik, Form, useFormikContext, Field } from 'formik';
import * as yup from 'yup';
import router, { useRouter } from 'next/router';
import { getAsString } from '../../utils/getAsString';
import CategorySelect from './CategorySelect';

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
	console.log('Values', values);
	// router.push(
	// 	{
	// 		pathname: '/products',
	// 		query: { ...values, page: 1 }
	// 	},
	// 	undefined,
	// 	{ shallow: true }
	// );
};

const ProductFilters = ({ categories }) => {
	const { query } = useRouter();
	const [ isOpen, setIsOpen ] = useState(false);

	const initialValues = {
		category: query.category || 'all'
	};
	return (
		<div className=" ">
			<div className="px-3 py-2 bg-gray-900 ">
				<button
					type="submit"
					onClick={() => setIsOpen(!isOpen)}
					className="inline-flex px-3 py-2 text-white  font-medium space-x-2 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow"
				>
					<FilterIcon />
					<span>Filters</span>
				</button>
			</div>
			{isOpen && (
				<Formik initialValues={initialValues} onSubmit={submitMyForm}>
					{({ values, handleChange, errors }) => {
						return (
							<Form className="px-3 space-y-4 bg-gray-800   ">
								<div className="lg:flex   ">
									<div className="md:flex lg:block py-4 md:items-center justify-between md:space-x-2 lg:space-x-0 lg:w-1/3   ">
										<label htmlFor=" category" className=" block space-y-1  md:w-1/2 lg:w-full">
											<span className="text-sm font-medium text-gray-500">Category</span>
											<Field
												as="select"
												name="category"
												id="category"
												className="w-full rounded-md bg-gray-700 text-white focus:text-white shadow focus:outline-none   "
											>
												{categories.map((c) => (
													<option
														key={c._id}
														value={c._id}
														className="bg-gray-700 text-white"
													>
														{c._id}
													</option>
												))}
											</Field>
										</label>

										<div className=" flex space-x-2 md:w-1/2 lg:w-full lg:mt-1">
											<label htmlFor="make" className="w-1/2  block space-y-1">
												<span className="text-sm font-medium text-gray-500">Make</span>
												<Field
													as="select"
													name="make"
													id="make"
													className="w-full rounded-md shadow bg-gray-700 text-white focus:text-white"
												>
													<option value="make1" className="bg-gray-700 text-white">
														make1
													</option>
													<option value="make2" className="bg-gray-700 text-white">
														make2
													</option>
													<option value="make3" className="bg-gray-700 text-white">
														make3
													</option>
												</Field>
											</label>
											<label htmlFor="model" className="w-1/2 block space-y-1 lg:w-1/2 ">
												<span className="text-sm font-medium text-gray-500">Model</span>
												<Field
													as="select"
													name="model"
													id="model"
													className="w-full rounded-md shadow bg-gray-700 text-white focus:text-white"
												>
													<option value="model1" className="bg-gray-700 text-white">
														model1
													</option>
													<option value="make2" className="bg-gray-700 text-white">
														model2
													</option>
													<option value="model3" className="bg-gray-700 text-white">
														model3
													</option>
												</Field>
											</label>
										</div>
									</div>
									<div className="space-y-1 py-4 border-t border-gray-900 lg:w-1/3 lg:ml-9 lg:border-l lg:px-7  ">
										<span className=" block text-sm font-medium text-gray-500">Food type</span>
										<div className="flex items-center justify-between  md:flex-wrap  ">
											<label htmlFor="foodType" className="space-x-1 md:w-1/4 lg:w-full ">
												<Field
													type="radio"
													className="shadow bg-gray-700 "
													name="foodType"
													onChange={handleChange}
												/>
												<span className="text-white text-sm">All</span>
											</label>
											<label htmlFor="foodType" className="space-x-1 md:w-1/4 lg:w-full ">
												<Field
													type="radio"
													className="shadow bg-gray-700"
													name="foodType"
													onChange={handleChange}
												/>
												<span className="text-white text-sm">Vegeterian</span>
											</label>
											<label htmlFor="foodType" className="space-x-1 md:w-1/4 lg:w-full">
												<Field
													type="radio"
													className="shadow bg-gray-700"
													name="foodType"
													onChange={handleChange}
												/>
												<span className="text-white text-sm">Vegan</span>
											</label>
											<label htmlFor="foodType" className="space-x-1 md:w-1/4 lg:w-full">
												<Field
													type="radio"
													className="shadow bg-gray-700"
													name="foodType"
													onChange={handleChange}
												/>
												<span className="text-white text-sm">Non-vegeterian</span>
											</label>
										</div>
									</div>
									<div className="pt-4 border-t border-gray-900 mb-4 lg:w-1/3 lg:border-l lg:pl-7 ">
										<span className=" block text-sm font-medium text-gray-500">Food category</span>
										<div className="flex flex-col md:flex-row md:items-center md:flex-wrap space-y-1 mt-1 md:space-y-0  ">
											{categories.map((c) => (
												<label htmlFor="" className="space-x-2 md:w-1/4 lg:w-1/2  " key={c._id}>
													<Field
														type="checkbox"
														className="shadow bg-gray-700 "
														value={c._id}
														name="category"
														onChange={handleChange}
													/>
													<span className="text-white text-sm">{c._id}</span>
												</label>
											))}
										</div>
									</div>
								</div>
								<div className=" pb-4 pt-3 mt-4 md:text-right border-t border-gray-900">
									<button
										type="submit"
										onClick={() => {
											setIsOpen(!isOpen);
										}}
										className="bg-purple-900 hover:bg-purple-500 px-4 py-2 block w-full md:w-auto md:inline-block  rounded-md shadow text-white font-medium tracking-wideer uppercase focus:outline-none "
									>
										Apply filters
									</button>
								</div>

								{/* <ValueChangeListener /> */}
							</Form>
						);
					}}
				</Formik>
			)}
		</div>
	);
};

export default ProductFilters;

export function FilterIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 text-gray-500"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
			/>
		</svg>
	);
}
