import { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import axios from 'axios';
import { shipInfoSchema } from '../../middlewares/shipInfoSchema';

export default function ShippingInfoForm({ shipInfo, closeModal, mutate }) {
	const router = useRouter();

	const initialValues = {
		fullname: shipInfo.shipInfo.fullname,
		email: shipInfo.shipInfo.email,
		zone: shipInfo.shipInfo.zone,
		district: shipInfo.shipInfo.district,
		phone: shipInfo.shipInfo.phone,
		city: shipInfo.shipInfo.city,
		area: shipInfo.shipInfo.area,
		address: shipInfo.shipInfo.address
	};

	const handleSubmit = async (values, actions) => {
		console.log('shipInfoValues', values);
		try {
			const res = await axios.put('/api/user/shipInfo', { values });
			mutate();
			closeModal();
		} catch (error) {
			console.log(error.response.data.message);
			if (error.response) {
				actions.setErrors(error.response.data.params.path, error.response.data.message);
			}
		}
	};

	return (
		<Fragment>
			<div className="px-9 ">
				<div className="border-b border-gray-200 ">
					<h3 className="text-lg font-bold ">Edit Product Shippment Information</h3>
				</div>
				<div>
					<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={shipInfoSchema}>
						{({ errors, isSubmitting, isValid, values }) => (
							<Form>
								<div className=" mt-5 ">
									<label htmlFor="fullname" className="">
										<span className="block text-sm font-semibold text-gray-500 mb-1">Fullname</span>
										<Field
											name="fullname"
											type="text"
											id="fullname"
											className={`${errors.fullname
												? 'ring-1 ring-red-500 w-full border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md  w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1">
											{errors.fullname && errors.fullname}
										</div>
									</label>

									<label htmlFor="zone">
										<span className="block text-sm font-semibold text-gray-500 mb-1">Zone</span>
										<Field
											name="zone"
											type="text"
											id="zone"
											placeholder="Eg: Bagmati, Gandaki"
											className={`${errors.zone
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1"> {errors.zone && errors.zone}</div>
									</label>

									<label htmlFor="district">
										<span className="block text-sm font-semibold text-gray-500 mb-1">District</span>
										<Field
											name="district"
											type="text"
											id="district"
											placeholder="Eg: Bhaktapur, Kathmandu"
											className={`${errors.district
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1">
											{' '}
											{errors.district && errors.district}
										</div>
									</label>

									<label htmlFor="phone">
										<span className="block text-sm font-semibold text-gray-500 mb-1">
											Mobile Number
										</span>
										<Field
											name="phone"
											type="number"
											id="phone"
											placeholder=""
											className={`${errors.phone
												? 'ring-1 ring-red-500 w-full  border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1"> {errors.phone && errors.phone}</div>
									</label>

									<label htmlFor="city">
										<span className="block text-sm font-semibold text-gray-500 mb-1">City</span>
										<Field
											name="city"
											type="text"
											id="city"
											className={`${errors.city
												? 'ring-1 ring-red-500 w-full border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1"> {errors.city && errors.city}</div>
									</label>

									<label htmlFor="area">
										<span className="block text-sm font-semibold text-gray-500 mb-1">Area</span>
										<Field
											name="area"
											type="text"
											id="area"
											placeholder="Eg: Tool, Galli, Road"
											className={`${errors.area
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md w-full placeholder-gray-300  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1"> {errors.area && errors.area}</div>
									</label>

									<label htmlFor="address">
										<span className="block text-sm font-semibold text-gray-500 mb-1">Address</span>
										<Field
											name="address"
											type="text"
											id="address"
											placeholder="Eg: Ward no, House no"
											className={`${errors.address
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1">
											{errors.address && errors.address}
										</div>
									</label>
								</div>

								<div className="text-center  lg:text-right mt-5  ">
									<button
										type="submit"
										className=" py-3 bg-purple-900 focus:outline-none hover:bg-purple-700 text-lg uppercase tracking-wide rounded-md shadow text-white w-full  "
									>
										Save
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</Fragment>
	);
}
