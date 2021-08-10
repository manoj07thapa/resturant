import { Disclosure, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import router from 'next/router';

export default function Create() {
	const query = router.router.query.query;
	return (
		<Fragment>
			<Disclosure className="pt-2">
				{({ open }) => (
					<div className="">
						<div className="px-2">
							<Disclosure.Button className=" mt-5 rounded-md  flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-purple-400  focus:outline-none ">
								<span className="text-lg font-medium ">Create</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 15l7-7 7 7"
									/>
								</svg>
							</Disclosure.Button>
						</div>
						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Disclosure.Panel className=" px-4 pt-4 pb-2 text-sm text-gray-500 ">
								<div className="flex flex-col space-y-1 border-l-4 border-dashed border-purple-400 divide-y divide-purple-100">
									<Link
										href={{
											pathname: '/dashboard',
											query: { query: 'create-product' }
										}}
									>
										<a
											className={`${query === 'create-product'
												? 'ml-1 px-4 py-2 rounded-md text-sm text-gray-600 hover:text-white font-medium bg-purple-200 hover:bg-purple-300 border-l-4 border-purple-500'
												: 'ml-1 px-4 py-2 rounded-md text-sm text-gray-600 hover:text-white font-medium hover:bg-purple-300'}`}
										>
											Add Product
										</a>
									</Link>
									<Link
										href={{
											pathname: '/dashboard',
											query: { query: 'create-resource' }
										}}
									>
										<a
											className={`${query === 'create-resource'
												? 'ml-1 px-4 py-2 rounded-md text-sm text-gray-600 hover:text-white font-medium bg-purple-200 hover:bg-purple-300 border-l-4 border-purple-500'
												: 'ml-1 px-4 py-2 rounded-md text-sm text-gray-600 hover:text-white font-medium hover:bg-purple-300'}`}
										>
											Add Resource
										</a>
									</Link>
									<Link
										href={{
											pathname: '/dashboard',
											query: { query: 'create-category' }
										}}
									>
										<a
											className={`${query === 'create-category'
												? 'ml-1 px-4 py-2 rounded-md text-sm text-gray-600 hover:text-white font-medium bg-purple-200 hover:bg-purple-300 border-l-4 border-purple-900'
												: 'ml-1 px-4 py-2 rounded-md text-sm text-gray-600 hover:text-white font-medium hover:bg-purple-300'}`}
										>
											Add Product category
										</a>
									</Link>
								</div>
							</Disclosure.Panel>
						</Transition>
					</div>
				)}
			</Disclosure>
		</Fragment>
	);
}
