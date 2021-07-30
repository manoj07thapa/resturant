import { Fragment } from 'react';
import Fbicon from '../../public/iconmonstr-facebook-3.svg';
import Instaicon from '../../public/iconmonstr-instagram-11.svg';
import Image from 'next/image';

export default function Footer() {
	return (
		<Fragment>
			<div className="flex items-center  justify-between px-5 md:px-12  mt-32 border-t border-gray-200  max-w-md mx-auto  ">
				<div className=" space-x-6 py-3 mt-1.5">
					<button className="h5 w-5 ">
						<Image src={Fbicon} alt="facebook icon " className="" />
					</button>
					<button className="h5 w-5 ">
						<Image src={Instaicon} alt="Instagram icon" />
					</button>
				</div>
				<div className=" space-x-6 py-3 text-gray-900">
					<span className="bg-purple-400 px-2 py-1 rounded-md shadow text-xs font-medium">khalti</span>
					<span className="bg-green-400 px-2 py-1 rounded-md shadow text-xs font-medium">e-sewa</span>
					<span className="bg-gray-500 px-2 py-1 text-white rounded-md shadow text-xs">cash on delivery</span>
				</div>
			</div>
			<div className="bg-gray-600  ">
				<div className=" px-5 md:px-12   max-w-md mx-auto sm:max-w-xl lg:max-w-full ">
					<div className="py-9  space-y-7 md:space-y-0 md:flex md:justify-between md:space-x-16 lg:space-x-0">
						<div>
							<h5 className="text-lg font-medium text-gray-200">Help & information</h5>
							<div className="mt-2 space-y-2 text-xs text-gray-300">
								<p>Help</p>
								<p>Track order</p>
								<p>Delicery & returns</p>
							</div>
						</div>

						<div>
							<h5 className="text-lg font-medium text-gray-200 uppercase tracking-wide">
								about web-molecule
							</h5>
							<div className="mt-3 space-y-2 text-xs text-gray-300">
								<p>About us</p>
								<p>Careers at web-Molecule</p>
								<p>Social responsibility</p>
							</div>
						</div>
						<div>
							<h5 className="text-lg font-medium text-gray-200 uppercase tracking-wide">
								more from web-molecule
							</h5>
							<div className="mt-3 space-y-2 text-xs text-gray-300">
								<p>Mobile & web-Molecule app</p>
								<p>Gift vouchers</p>
								<p>weekends offers</p>
							</div>
						</div>
					</div>
					<div className="  py-3 flex items-center justify-between text-gray-400 text-sm border-t border-gray-900 ">
						<p className="">
							2021 WebMolecule <span className="text-xs">(all rights reserved)</span>
						</p>
						<p>Privacy & Cookies | Ts&Cs | Acessibility</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
