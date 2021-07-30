import { Fragment, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import axios from 'axios';
import { shipInfoSchema } from '../../middlewares/shipInfoSchema';
import { useUser } from '@auth0/nextjs-auth0';
import { DotLoader } from 'react-spinners';
import Image from 'next/image';
import DeliveryIcon from '../../public/iconmonstr-delivery-6.svg';

export default function ShippingInfoForm({ shipInfo }) {
	// useEffect(() => {
	// 	if (shipInfo.shipInfo.zone) {
	// 		router.push('/checkout');
	// 	}
	// });
	const { user, error, isLoading } = useUser();
	const router = useRouter();

	if (isLoading)
		return (
			<div className="flex justify-center">
				<DotLoader color="#2a9d8f" />
			</div>
		);
	if (error) return <div>Error</div>;

	const initialValues = {
		fullname: '',
		email: user.email,
		zone: '',
		district: '',
		phone: '',
		city: '',
		area: '',
		address: ''
	};

	const handleSubmit = async (values, actions) => {
		try {
			const res = await axios.post('/api/user/shipInfo', { values });
			if (res) {
				router.push('/checkout');
			}
		} catch (error) {
			if (error.response) {
				actions.setFieldError(error.response.data.params.path, error.response.data.message);
			}
		}
	};

	return (
		<Fragment>
			<div className="px-5 sm:px-12 mt-7  py-7 ">
				<div className="text-2xl font-bold border-b border-gray-200 flex items-center justify-between">
					<h4 className="pb-1">Product Shippment Form</h4>
					<span className="sm:mr-32 md:mr-40 ">
						<Image src={DeliveryIcon} alt="delivery icon" />
					</span>
				</div>

				<div className="mt-9">
					<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={shipInfoSchema}>
						{({ errors, isSubmitting, isValid, values }) => (
							<Form>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5">
									<label htmlFor="fullname" className="">
										<span className="block text-sm font-semibold text-gray-500 mb-1">Fullname</span>
										<Field
											name="fullname"
											type="text"
											id="fullname"
											className={`${errors.fullname
												? 'ring-1 ring-red-500 w-full sm:w-2/3 border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md  w-full sm:w-2/3 focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
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
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full sm:w-2/3 border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full sm:w-2/3 focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
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
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full sm:w-2/3 border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full sm:w-2/3 focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
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
												? 'ring-1 ring-red-500 w-full sm:w-2/3 border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full sm:w-2/3 focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
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
												? 'ring-1 ring-red-500 w-full sm:w-2/3 border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full sm:w-2/3 focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
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
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full sm:w-2/3 border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md w-full placeholder-gray-300 sm:w-2/3 focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
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
												? 'ring-1 ring-red-500 placeholder-gray-300 w-full sm:w-2/3 border-red-500 rounded-md shadow  focus:outline-none'
												: 'rounded-md placeholder-gray-300 w-full sm:w-2/3 focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
										/>
										<div className="text-red-500 text-xs mt-1">
											{errors.address && errors.address}
										</div>
									</label>
								</div>

								<div className="text-center  lg:text-right mt-3 py-7 lg:mr-40">
									<button
										type="submit"
										className=" py-3 bg-purple-900 focus:outline-none hover:bg-purple-700 text-lg uppercase tracking-wide rounded-md shadow text-white w-full lg:w-48 "
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
