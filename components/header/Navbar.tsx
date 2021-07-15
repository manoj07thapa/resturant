import { useState } from 'react';
import Link from 'next/link';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import UserMenu from './UserMenu';
import Search from './Search';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<header className="  py-4  border-b border-gray-200 bg-yellow-200 shadow-sm">
			<nav className="  flex items-center justify-between max-w-5xl mx-auto ">
				<div className="">
					<Link href="/">
						<a className="  px-2 text-lg font-bold text-yellow-700 hover:text-yellow-500 tracking-wider">
							FOODIE{/* <Image src={logo} alt="brand logo" height={50} width={50} /> */}
						</a>
					</Link>
				</div>

				<div className="hidden sm:flex sm:items-center sm:space-x-7 px-2">
					<div>
						<Search />
					</div>
					<div>
						<Link href="/products">
							<a className="flex items-center text-sm font-medium  leading-5  text-gray-500 hover:text-gray-800  transition ease-in-out duration-200">
								Products
							</a>
						</Link>
					</div>
					<div>
						{user ? (
							<div className="flex items-center space-x-7">
								<div>
									<Link href="/cart">
										<a className="flex items-center text-sm font-medium  leading-5  text-gray-500 hover:text-gray-800  transition ease-in-out duration-200">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="pr-1 h-4 w-5 "
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
											<span>Cart</span>
										</a>
									</Link>
								</div>

								<div>
									<Link href="/favourites">
										<a className=" text-sm font-medium  leading-5  text-gray-500 hover:text-gray-800  transition ease-in-out duration-200">
											Favourites
										</a>
									</Link>
								</div>
								<UserMenu />
							</div>
						) : (
							<Link href="/api/auth/login">
								<a className="px-3 py-2 text-sm font-medium rounded-lg leading-5 shadow-sm text-white  hover:text-gray-900 bg-yellow-900 hover:bg-yellow-500 transition ease-in-out duration-200">
									Login/Signup
								</a>
							</Link>
						)}
					</div>
				</div>
				<div className="sm:hidden">
					{!isOpen ? (
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="  px-2 text-gray-900 hover:text-gray-700 focus:outline-none  "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 fill-current "
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					) : (
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="  px-2 text-gray-900 hover:text-gray-700 focus:outline-none  "
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
					)}
				</div>
			</nav>
		</header>
	);
}
