import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import axios from 'axios';
import MultipleFileUploadField from '../upload/MultipleFileUploadFields';
import { productSchema } from '../../middlewares/productSchema';
import { MinusOutlined, PlusOutlined } from './AddCategory';

export default function CreateProduct({ categories }) {
	const initialValues = {
		category: '',
		title: '',
		subtitle: '',
		format: [],
		ingredients: [ '' ],
		discount: 0,
		price: 0,
		description: '',
		criteria: [],
		files: [ {} ]
	};
	const handleSubmit = async (values, actions) => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: 'JWT fefege...'
		};
		try {
			const res = await axios.post('/api/products', { values }, { headers });
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
		<div className="px-3 lg:ml-36 ">
			<div className="max-w-md mx-auto">
				<h3 className="text-3xl font-bold mt-5 text-gray-700 border-b  border-gray-200">Create a product</h3>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={productSchema}
					validateOnBlur={false}
				>
					{({ errors, isSubmitting, isValid, values }) => (
						<Form className="mt-5">
							{console.log(errors)}
							<label htmlFor="title">
								<span className="block text-sm font-semibold text-gray-500 mb-1">Title</span>
								<Field
									name="title"
									type="text"
									id="title"
									value={values.title}
									className={`${errors.title
										? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
										: 'rounded-md placeholder-gray-300 w-full focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
								/>
								<div className="text-red-500 text-xs mt-1">{errors.title && errors.title}</div>
							</label>
							<div className="flex items-center justify-between space-x-2 mt-3">
								<label htmlFor="price">
									<span className="block text-sm font-semibold text-gray-500 mb-1">Price</span>
									<Field
										name="price"
										type="number"
										id="price"
										className={`${errors.price
											? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
											: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
									/>
									<div className="text-red-500 text-xs mt-1">{errors.price && errors.price}</div>
								</label>
								<label htmlFor="discount">
									<span className="block text-sm font-semibold text-gray-500 mb-1">Discount</span>
									<Field
										name="discount"
										type="number"
										id="discount"
										className={`${errors.discount
											? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
											: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
									/>
									<div className="text-red-500 text-xs mt-1">
										{errors.discount && errors.discount}
									</div>
								</label>
							</div>
							<div className="mt-3">
								<label htmlFor="subtitle" className="">
									<span className="block text-sm font-semibold text-gray-500 mb-1">Subtitle</span>
									<Field
										name="subtitle"
										type="text"
										id="subtitle"
										className={`${errors.subtitle
											? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
											: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
									/>
									<div className="text-red-500 text-xs mt-1">
										{errors.subtitle && errors.subtitle}
									</div>
								</label>
							</div>
							<div className="flex items-center justify-between w-full mt-3">
								<label htmlFor="category " className="w-full">
									<span className="block text-sm font-semibold text-gray-500 mb-1">
										Choose a category
									</span>
									<Field
										as="select"
										name="category"
										type="text"
										id="category"
										className={`${errors.category
											? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
											: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
									>
										{categories[0].category.map((c) => (
											<option key={c} value={c}>
												{c}
											</option>
										))}
									</Field>
									<div className="text-red-500 text-xs mt-1">
										{errors.category && errors.category}
									</div>
								</label>
							</div>
							<div className="flex mt-3 items-center justify-between ">
								<label htmlFor="vegeterian">
									<Field
										type="checkbox"
										name="format"
										value="vegeterian"
										id="vegeterian"
										className="focus:outline-none focus:border-purple-500 focus:ring-purple-500"
									/>
									<span className=" text-sm font-semibold text-gray-500 ml-2 ">Vegeterian</span>
								</label>
								<label>
									<Field
										type="checkbox"
										name="format"
										value="nonVegeterian"
										className="focus:outline-none focus:border-purple-500 focus:ring-purple-500"
									/>
									<span className=" text-sm font-semibold text-gray-500 ml-2">Non-Vegeterian</span>
								</label>
								<label>
									<Field
										type="checkbox"
										name="format"
										value="Vegan"
										className="focus:outline-none focus:border-purple-500 focus:ring-purple-500"
									/>
									<span className=" text-sm font-semibold text-gray-500 ml-2">Vegan</span>
								</label>
							</div>
							<div className="mt-3">
								<FieldArray id="ingredients" name="ingredients">
									{(fieldArrayProps) => {
										const { push, remove, form: { values: { ingredients } } } = fieldArrayProps;
										return (
											<div>
												{ingredients.length &&
													ingredients.map((_, index) => (
														<div key={index}>
															<div className="flex items-center justify-between ">
																<label htmlFor="ingredients " className="w-2/3">
																	<span className="block text-sm font-semibold text-gray-500 mb-1">
																		Add Ingredients
																	</span>
																	<Field
																		name={`ingredients[${index}]`}
																		type="text"
																		id="ingredients"
																		className={`${errors.length === 0
																			? 'ring-1 ring-red-500 placeholder-gray-300 w-full border-red-500 rounded-md shadow  focus:outline-none'
																			: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
																	/>
																	<div className="text-red-500 text-xs mt-1">
																		<ErrorMessage
																			name={`ingredients.${index}`}
																			component="div"
																		/>
																	</div>
																</label>
																{index > 0 && (
																	<button type="button" onClick={() => remove(index)}>
																		<MinusOutlined />
																	</button>
																)}
																<button
																	type="button"
																	onClick={() => push()}
																	className=""
																>
																	<PlusOutlined />
																</button>
															</div>
														</div>
													))}
											</div>
										);
									}}
								</FieldArray>
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
							<div className="mt-3 flex items-center justify-between">
								<label htmlFor="popular">
									<Field
										type="checkbox"
										name="criteria"
										value="Popular"
										id="popular"
										className=" focus:outline-none focus:border-purple-500 focus:ring-purple-500 "
									/>
									<span className=" text-sm font-semibold text-gray-500 ml-2">Popular</span>
								</label>
								<label htmlFor="speciality">
									<Field
										type="checkbox"
										name="criteria"
										value="Speciality"
										id="speciality"
										className=" focus:outline-none focus:border-purple-500 focus:ring-purple-500 "
									/>
									<span className=" text-sm font-semibold text-gray-500 ml-2">Speciality</span>
								</label>
								<label htmlFor="chefSpecial">
									<Field
										type="checkbox"
										name="criteria"
										value="Chef Special"
										id="chefSpecial"
										className=" focus:outline-none focus:border-purple-500 focus:ring-purple-500 "
									/>
									<span className=" text-sm font-semibold text-gray-500 ml-2">Chef Special</span>
								</label>
							</div>

							<div className="mt-3">
								<MultipleFileUploadField name="files" />
							</div>
							<div className="py-12 ">
								<button
									type="submit"
									className="focus:outline-none px-7 py-4 bg-gray-900 uppercase tracking-wider hover:bg-gray-700 rounded-md  text-medium font-medium text-white w-full"
								>
									Submit
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}
