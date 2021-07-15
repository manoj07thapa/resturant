import Cart from '../../../models/Cart';
import dbConnect from '../../../utils/dbConnect';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function khalti(req: NextApiRequest, res: NextApiResponse) {
	await dbConnect();
	const { payload } = req.body;
	console.log('PAYLOAD', payload);

	const data = {
		token: payload.token,
		amount: payload.amount
	};

	let config = {
		headers: { Authorization: process.env.KHALTI_SECRET_KEY }
	};

	try {
		const response = await axios.post('https://khalti.com/api/v2/payment/verify/', data, config);
		console.log('KHALTIPAYMENTRES', response);
		res.status(200).json({ success: true, message: 'Payment successful' });
	} catch (error) {
		res.status(200).json({ success: false, message: 'Payment Unsuccessful' });
	}
});
