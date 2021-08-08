import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CartDetail from './CartDetail';
import { DotLoader } from 'react-spinners';
import router from 'next/router';

export default function SlideoverCartPanel({ addToCart, cartItems }) {
	const [ open, setOpen ] = useState(false);

	// const { cart, isLoading, isError, mutate } = GetCart();

	if (!cartItems)
		return (
			<div className="">
				<DotLoader color="#2a9d8f" />
			</div>
		);

	return (
		<Fragment>
			<button
				onClick={() => {
					addToCart();
					setOpen((open) => !open);
				}}
				className="px-5 py-2 w-full bg-green-900 text-white hover:bg-green-700 uppercase tracking-wide rounded-md shadow focus:outline-none"
			>
				Add to cart
			</button>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" static className="fixed inset-0 overflow-hidden z-20" open={open} onClose={setOpen}>
					<div className="absolute inset-0 overflow-hidden">
						<Transition.Child
							as={Fragment}
							enter="ease-in-out duration-500"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in-out duration-500"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>
						<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<div className="relative w-screen max-w-md ">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
											<button
												className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
												onClick={() => setOpen(false)}
											>
												<span className="sr-only">Close panel</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="h-full flex flex-col py-6 bg-white shadow-xl ">
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-lg font-medium text-gray-900 flex items-center justify-between ">
												<div className="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
													</svg>
													<span>Your cart items</span>
												</div>
												<div>
													<button
														onClick={() => router.push('/products')}
														className="inline-block bg-purple-100 hover:bg-purple-300 px-2 py-1 text-gray-700 rounded-full text-xs  tracking-wide focus:outline-none"
													>
														Browse for more
													</button>
												</div>
											</Dialog.Title>
										</div>
										<div className="mt-6 relative flex-1 px-4 sm:px-6 overflow-y-scroll border-t-4 border-purple-300">
											{/* Replace with your content */}
											<div className="absolute inset-0 px-4 sm:px-6">
												<div className="h-full" aria-hidden="true">
													<CartDetail cartItems={cartItems} />
												</div>
											</div>
											{/* /End replace */}
										</div>
										<div className="px-4 sm:px-6 py-4 border-t-2 border-gray-400">
											<button
												onClick={() => router.push('/cart')}
												className="px-5 py-3  mt-3 text-center bg-gray-900 hover:bg-gray-700 text-white uppercase block font-medium text-medium space-x-2 rounded-md shadow w-full focus:outline-none "
											>
												go to cart
											</button>
										</div>
									</div>
								</div>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</Fragment>
	);
}

function XIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
}
