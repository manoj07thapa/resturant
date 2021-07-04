import { Disclosure } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

export default function Sidebar() {
	return (
		<section className="bg-gray-500 xl:w-72 h-screen flex">
			<div className="xl:flex xl:flex-col xl:justify-between xl:h-full">
				<div className="lg:grid lg:grid-cols-3 lg:gap-3 xl:block xl:overflow-y-auto">
					<div className="w-full px-4 pt-7">
						<div className="w-full max-w-2xl p-2 mx-auto bg-white rounded-2xl">
							<Disclosure>
								{({ open }) => (
									<Fragment>
										<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>Create</span>

											<svg
												xmlns="http://www.w3.org/2000/svg"
												className={`${open
													? 'transform rotate-180'
													: ''} w-5 h-5 text-purple-500`}
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
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
											<Link
												href={{
													pathname: '/dashboard',
													query: { query: 'index' }
												}}
											>
												<a>Dishe</a>
											</Link>
										</Disclosure.Panel>
									</Fragment>
								)}
							</Disclosure>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
