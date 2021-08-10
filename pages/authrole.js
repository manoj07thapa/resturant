import React from 'react';
import axios from 'axios';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function authrole() {
	const handleClick = async () => {
		const res = await axios.get('/api/roletest/authRoleTest');
		console.log(res.data);
	};

	return (
		<div className="mt-36 text-center">
			<button className="px-4 py-2 bg-gray-900 text-white" onClick={handleClick}>
				role test
			</button>
		</div>
	);
});
