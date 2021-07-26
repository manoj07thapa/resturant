import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';

export default function Search({ isOpen, setIsOpen }) {
	let [ isModalOpen, setModalOpen ] = useState(false);

	function closeModal() {
		setModalOpen(false);
	}

	function openModal() {
		setModalOpen(true);
	}

	const router = useRouter();
	const initialValues = {
		search: ''
	};

	const handleSubmit = async (values) => {
		router.push(
			{
				pathname: '/products',
				query: { ...values, page: 1 }
			},
			undefined,
			{ shallow: true }
		);
		closeModal();
		setIsOpen(!isOpen);
	};
	return (
		<Fragment>
			<div className="">
				<button
					type="button"
					onClick={openModal}
					className=" inline-flex items-center space-x-4 sm:space-x-2  border-b-2 border-gray-500 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className=" px-1 sm:px-0 pt-1 pb-2 flex flex-shrink-0 items-center justify-center h-6 w-6 sm:h-7 sm:w-7 bg-purple-900 sm:bg-white text-white sm:text-gray-700 hover:text-gray-400 rounded-md"
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
					<span className="pb-2 text-md sm:text-lg  font-sm text-gray-400 tracking-wide hover:text-gray-300 uppercase">
						What are you craving ?
					</span>
				</button>
			</div>

			<Transition appear show={isModalOpen} as={Fragment}>
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
								<Dialog.Title className="  block sm:max-w-sm sm:w-full relative max-w-xs w-full">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-purple-600"
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
													className="block w-full text-lg font-lg  text-gray-500 rounded-lg px-11 pr-4 py-2 border-2 border-gray-200 shadow-sm focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 "
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
