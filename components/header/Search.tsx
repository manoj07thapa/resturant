import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';

export default function MyModal() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const { query } = useRouter();
	const router = useRouter();
	const initialValues = {
		search: ''
	};

	const handleSubmit = async (values: any) => {
		router.push(
			{
				pathname: '/products',
				query: { ...values, page: 1 }
			},
			undefined,
			{ shallow: true }
		);
		closeModal();
	};
	return (
		<Fragment>
			<div className="">
				<button
					type="button"
					onClick={openModal}
					className=" flex items-center text-sm font-medium  leading-5  text-gray-500 hover:text-gray-800 focus:outline-none  transition ease-in-out duration-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="pr-1 h-4 w-5  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<span>Explore</span>
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className="inline-block h-screen align-top" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-flex items-center justify-between w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl ">
								{/* <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
									Explore for food
								</Dialog.Title> */}
								<Dialog.Title className=" hidden sm:block sm:max-w-sm sm:w-full relative max-w-xs w-full">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-gray-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</div>
									<Formik initialValues={initialValues} onSubmit={handleSubmit}>
										{({ values }) => (
											<Form>
												<Field
													className="block w-full text-lg font-medium  text-gray-500 rounded-lg px-11 pr-4 py-2 border-2 border-gray-200 shadow-sm focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 "
													type="text"
													name="search"
													value={values.search}
													id=""
													placeholder="Search For Food"
												/>
											</Form>
										)}
									</Formik>
								</Dialog.Title>
								<button
									type="button"
									onClick={closeModal}
									className=" ml-14  text-gray-400 hover:text-gray-700 focus:outline-none  "
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</Fragment>
	);
}
