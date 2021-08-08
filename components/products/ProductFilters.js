import { useEffect, useState } from 'react';
import { Formik, Form, useFormikContext, Field } from 'formik';
import router, { useRouter } from 'next/router';
import { getAsString } from '../../utils/getAsString';
import RangeSlider from './RangeSlider';
const ValueChangeListener = ({ value }) => {
	const { submitForm, values } = useFormikContext();
	// const { value } = values;

	useEffect(
		() => {
			if (values) {
				submitForm();
			}
		},
		[ values, submitForm, value ]
	);

	return null;
};

const ProductFilters = ({ categories, foodType, criteria }) => {
	const [ value, setValue ] = useState(1000);

	const { query } = useRouter();
	console.log('QUERY', query);
	const [ isOpen, setIsOpen ] = useState(true);
	const handleRangeChange = (e) => setValue(e.target.value);

	const initialValues = {
		category: getAsString(query.category),
		format: getAsString(query.format) || 'all',
		criteria: getAsString(query.criteria) || 'all'
		// price: 1000
	};

	const submitMyForm = (values) => {
		router.push(
			{
				pathname: '/products',
				query: { ...values, value, page: 1 }
			},
			undefined,
			{ shallow: true }
		);
		console.log('Values', values);
	};
	return (
		<div className="">
			<div className="px-3 py-2 bg-gray-900 sm:hidden">
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
							<Form className="px-3  space-y-4 bg-gray-800  pt-5  ">
								{console.log(values)}
								<div className="lg:flex    ">
									{/* <div className="md:flex lg:block py-4 md:items-center justify-between md:space-x-2 lg:space-x-0 lg:w-1/3   ">
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
									</div> */}
									<div className="space-y-1 py-4 border-t border-gray-900 lg:w-1/4 lg:ml-9  lg:border-t-0 lg:pt-0 ">
										<span className=" block text-medium font-medium text-white">Dietry</span>
										<div className="flex items-center justify-between  md:flex-wrap  ">
											<label htmlFor="foodType" className="space-x-2 md:w-1/4 lg:w-full ">
												<Field
													type="radio"
													className="shadow bg-gray-700 "
													name="format"
													value="all"
													onChange={handleChange}
												/>
												<span className="text-gray-400 text-sm">All</span>
											</label>
											{foodType.map((ft, i) => (
												<label
													htmlFor="foodType"
													className="space-x-2 md:w-1/4 lg:w-full "
													key={i}
												>
													<Field
														type="radio"
														className="shadow bg-gray-700"
														name="format"
														value={ft._id}
														onChange={handleChange}
													/>
													<span className="text-gray-400 text-sm">{ft._id}</span>
												</label>
											))}
										</div>
									</div>
									<div className="space-y-1 py-4 border-t border-gray-900 lg:w-1/4 lg:ml-9 lg:border-l lg:px-7 lg:border-t-0 lg:pt-0  ">
										<span className=" block text-medium font-medium text-white">Sort By</span>
										<div className="flex items-center justify-between  md:flex-wrap  ">
											<label htmlFor="criteria" className="space-x-2 md:w-1/4 lg:w-full ">
												<Field
													type="radio"
													className="shadow bg-gray-700 "
													name="criteria"
													value="all"
													onChange={handleChange}
												/>
												<span className="text-gray-400 text-sm ">All</span>
											</label>
											{criteria.map((ct, i) => (
												<label
													key={i}
													htmlFor="popular"
													className="space-x-2 md:w-1/4 lg:w-full "
												>
													<Field
														id="popular"
														type="radio"
														className="shadow bg-gray-700 "
														name="criteria"
														onChange={handleChange}
														value={ct._id}
													/>
													<span className="text-gray-400 text-sm ">{ct._id}</span>
												</label>
											))}
										</div>
									</div>
									<div className="pt-4 border-t border-gray-900 mb-4 lg:w-full  lg:border-l lg:pl-7 lg:border-t-0 lg:pt-0 ">
										<span className=" block text-medium font-medium text-white">Food category</span>
										<div className="flex flex-col md:flex-row md:items-center md:flex-wrap space-y-1 mt-1 md:space-y-0  ">
											{categories.map((c) => (
												<label htmlFor="" className="space-x-2 md:w-1/4 lg:w-1/3  " key={c._id}>
													<Field
														type="checkbox"
														className="shadow bg-gray-700 "
														value={c._id}
														name="category"
														onChange={handleChange}
														checked={query.category === c._id ? true : false}
													/>
													<span className="text-gray-400 text-sm">{c._id}</span>
												</label>
											))}
										</div>
									</div>
									<div className="space-y-1 py-4 border-t border-gray-900 lg:w-1/3 lg:ml-9 lg:border-l lg:px-7  lg:border-t-0 lg:pt-0 ">
										<span className=" block text-medium font-medium text-white mb-5">Price</span>
										<div className="flex items-center justify-between  md:flex-wrap  ">
											<div className="flex items-center">
												<input
													type="range"
													min={100}
													max={2000}
													step={2}
													value={value}
													onChange={handleRangeChange}
												/>
												<div className="text-gray-400 ml-2 mb-1">Rs.{value}</div>
											</div>
										</div>
									</div>
									{/* <RangeSlider name="price" type="range" label="Price" min={100} max={1000} /> */}
								</div>
								<div className="sm:hidden pb-4 pt-3 mt-4 md:text-right border-t border-gray-900">
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

								<ValueChangeListener value={value} />
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
