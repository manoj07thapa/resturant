import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { NextJwtVerifier } from '@serverless-jwt/next';

export default withApiAuthRequired(async function shows(req, res) {
	try {
		const { accessToken } = await getAccessToken(req, res, {
			scopes: [ 'read:appointments' ]
		});
		console.log(accessToken);

		const baseURL =
			process.env.AUTH0_BASE_URL.indexOf('http') === 0
				? process.env.AUTH0_BASE_URL
				: `https://${process.env.AUTH0_BASE_URL}`;

		// This is a contrived example, normally your external API would exist on another domain.
		const response = await axios.get(baseURL + '/api/roletest/role', {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		const shows = await response.json();
		console.log(shows);
		res.status(response.status || 200).json(shows);
	} catch (error) {
		console.error(error);
		res.status(error.status || 500).json({
			code: error.code,
			error: error.message
		});
	}
});
