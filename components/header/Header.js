import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { DotLoader } from 'react-spinners';
import Image from 'next/image';
import Logo from '../../public/logo1.png';
import Link from 'next/link';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import Search from './Search';

export default function Header() {
	const [ isOpen, setIsOpen ] = useState(false);
	const { user } = useUser();

	// if (isLoading)
	// 	return (
	// 		<div className="flex text-center justify-center mt-72">
	// 			<DotLoader color="#2a9d8f" />
	// 		</div>
	// 	);
	// if (error) return <div>{error.message}</div>;

	return (
		<div className=" bg-white border-b border-gray-200 w-full fixed z-10 top-0">
			<div className="flex items-center justify-between  px-3 md:px-12 py-4  md:py-3  md:max-w-9xl  mx-auto ">
				<div className="hidden sm:block">
					<Link href="/">
						<a>
							<Image
								src={Logo}
								height={50}
								width={50}
								placeholder="blur"
								alt="brand logo"
								objectFit="cover"
							/>
						</a>
					</Link>
				</div>
				<Search />
				<div className=" md:hidden">
					{!isOpen && (
						<button className="text-gray-400 " onClick={() => setIsOpen(!isOpen)} type="button">
							<HamburgerMenuIcon />
						</button>
					)}
				</div>
				{/*Desktop navbar*/}
				<div className="hidden md:block">
					<DesktopHeader user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
			</div>
			{/*mobile menu when menu is open*/}
			{isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} user={user} />}
		</div>
	);
}

function HamburgerMenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
		</svg>
	);
}
