import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Image from 'next/image';

export default function AccountSwitcherMenu() {
	const router = useRouter();

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<div className="">
			<Menu as="div" className="relative inline-block text-left">
				{({ open }) => (
					<Fragment>
						<div>
							<Menu.Button className="focus:outline-none">
								<img className="h-8 w-8 rounded-full object-cover fo" src={user.picture} alt="" />
							</Menu.Button>
						</div>
						<Transition
							show={open}
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 w-56  origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="px-1 py-1 ">
									<Menu.Item>
										{({ active }) => (
											<button
												onClick={() => router.push('/profile')}
												className={`${active
													? 'bg-yellow-300 text-white'
													: 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
											>
												{active ? (
													<EditActiveIcon className="w-5 h-5 mr-2 " aria-hidden="true" />
												) : (
													<EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
												)}
												Profile
											</button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link href="/api/auth/logout">
												<a
													className={`${active
														? 'bg-yellow-300 text-white'
														: 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
												>
													{active ? (
														<DuplicateActiveIcon
															className="w-5 h-5 mr-2"
															aria-hidden="true"
														/>
													) : (
														<DuplicateInactiveIcon
															className="w-5 h-5 mr-2"
															aria-hidden="true"
														/>
													)}
													Logout
												</a>
											</Link>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Fragment>
				)}
			</Menu>
		</div>
	);
}

function EditInactiveIcon(props) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function EditActiveIcon(props) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
}

function DuplicateInactiveIcon(props) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 4H12V12H4V4Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
			<path d="M8 8H16V16H8V8Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function DuplicateActiveIcon(props) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 4H12V12H4V4Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M8 8H16V16H8V8Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
}
