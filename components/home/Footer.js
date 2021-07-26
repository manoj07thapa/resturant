import React from 'react';
import Fbicon from '../../public/iconmonstr-facebook-3.svg';
import Image from 'next/image';

export default function Footer() {
	return (
		<div>
			<div className=" px-12 pt-12 bg-gray-100 flex items-center justify-between ">
				<p>
					2021 VHONX <span>All rights reserved</span>
				</p>
				<div className="">
					<Image src={Fbicon} height={20} width={20} alt="facebook logo" />
				</div>
				<div>
					<p>Privacy & Cookies | Ts&Cs | Acessibility</p>
				</div>
			</div>
		</div>
	);
}
