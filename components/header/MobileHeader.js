import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo1.png';
import UserMenu from './UserMenu';

export default function MobileHeader({ isOpen, setIsOpen, user }) {
	return (
		<div className="absolute top-0 inset-x-0 p-2 z-10">
			<div className="rounded-lg shadow-lg">
				<div className="rounded-lg shadow-xs bg-white pt-5 pb-8 px-5 space-y-8">
					<div className="flex items-center justify-between">
						<div>
							<Link href="/">
								<a onClick={() => setIsOpen(!isOpen)}>
									<Image
										src={Logo}
										height={50}
										width={50}
										placeholder="blur"
										alt="brand logo"
										objectFit="cover"
										objectPosition="center center"
									/>
								</a>
							</Link>
						</div>
						<div>
							<button className="text-gray-400 " onClick={() => setIsOpen(!isOpen)} type="button">
								<DeleteMenuIcon />
							</button>
						</div>
					</div>
					<div>
						<nav className="flex flex-col  px-2 space-y-8">
							{user ? (
								<div className="space-y-8 ">
									<Link href="/products">
										<a className="flex items-center space-x-4" onClick={() => setIsOpen(!isOpen)}>
											<h3 className=" text-xl font-sm text-gray-900 tracking-wide ">
												Browse Food
											</h3>
										</a>
									</Link>

									<Link href="/cart">
										<a className="flex items-center space-x-4" onClick={() => setIsOpen(!isOpen)}>
											<CartIcon />
											<h3 className=" text-xl font-sm text-gray-900 tracking-wide ">Cart</h3>
										</a>
									</Link>
									<Link href="/favourites">
										<a className="flex items-center space-x-4 " onClick={() => setIsOpen(!isOpen)}>
											<FavouriteIcon />
											<h3 className=" text-xl font-sm text-gray-900 tracking-wide">Favourites</h3>
										</a>
									</Link>
									<hr className="text-gray-300 " />
									<div>
										<UserMenu isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
									</div>
								</div>
							) : (
								<Link href="/api/auth/login">
									<a className="flex items-center space-x-4">
										<LoginIcon />
										<h3 className=" text-xl font-sm text-gray-900 tracking-wide">Login</h3>
									</a>
								</Link>
							)}
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export function DeleteMenuIcon(props) {
	return (
		<svg
			{...props}
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

export function CartIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			className="px-1 py-1 sm:px-0 sm:py-0 flex flex-shrink-0 items-center justify-center h-6 w-6 bg-purple-900 md:bg-transparent text-white  rounded-md"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
			/>
		</svg>
	);
}

export function FavouriteIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="px-1 py-1 sm:px-0 sm:py-0 flex flex-shrink-0 items-center justify-center h-6 w-6  bg-purple-900 md:bg-transparent text-white md:text-gray-400   rounded-md"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>
	);
}

export function LoginIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="px-1 py-1 flex flex-shrink-0 items-center justify-center h-6 w-6 bg-purple-900 text-white rounded-md"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
			/>
		</svg>
	);
}
