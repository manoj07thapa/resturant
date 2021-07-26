import React, { Fragment } from 'react';

export default function BlurAnimation() {
	return (
		<Fragment>
			<div className="absolute top-0 -left-0  md:right-48 w-24 h-32 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob" />
			<div className="absolute top-1 left-2  w-24 h-32 sm:w-72 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000" />
			<div className="absolute -top-2 left-32 md:-right-32 w-24 h-32 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000" />
		</Fragment>
	);
}
