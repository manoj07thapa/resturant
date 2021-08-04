import React from 'react';
import Link from 'next/link';
import Search from './Search';
import UserMenu from './UserMenu';
import { CartIcon, FavouriteIcon } from './MobileHeader';
import { useRouter } from 'next/router';

export default function DesktopHeader({ user, isOpen, setIsOpen }) {
	const router = useRouter();
	return (
		<div className="">
			<nav className="flex items-center sm:space-x-10 md:space-x-32">
				{user ? (
					<div className="flex items-center space-x-10">
						<Link href="/products">
							<a
								className={`${router.pathname === '/products'
									? 'inline-flex items-center tracking-wide space-x-1 text-lg font-semibold bg-purple-900 text-white px-4 py-1 rounded-md'
									: 'inline-flex items-center tracking-wide space-x-1 text-lg font-semibold text-gray-700 hover:text-gray-400'} `}
							>
								Browse Food
							</a>
						</Link>
						<Link href="/favourites">
							<a
								className={`${router.pathname === '/favourites'
									? 'inline-flex items-center space-x-1 text-lg font-semibold tracking-wide  bg-purple-900 text-white px-4 py-1 rounded-md'
									: 'inline-flex items-center space-x-1 text-lg font-semibold tracking-wide  text-gray-700 hover:text-gray-400'} `}
							>
								{/* <FavouriteIcon /> */}
								<span>Favourite</span>
							</a>
						</Link>
						<Link href="/cart">
							<a
								className={`${router.pathname === '/cart'
									? 'px-4 py-1 inline-flex items-center space-x-1 bg-purple-900  text-white rounded-md'
									: 'px-4 py-1 inline-flex items-center space-x-1 bg-gray-900 hover:bg-gray-500 text-white rounded-md'}`}
							>
								<CartIcon />
								<span className="text-lg font-semibold tracking-wide ">Cart</span>
								<span className="text-xs font-bold">-{1}</span>
							</a>
						</Link>
						<UserMenu user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
				) : (
					<Link href="/api/auth/login">
						<a className="px-4 py-1 text-lg font-sm text-white  bg-gray-900 hover:bg-gray-500 rounded-md">
							Login
						</a>
					</Link>
				)}
			</nav>
		</div>
	);
}
