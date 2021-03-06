import Cart from '../../../models/Cart';
import dbConnect from '../../../utils/dbConnect';
import axios from 'axios';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function khalti(req, res) {
	await dbConnect();
	const { payload } = req.body;

	const data = {
		token: payload.token,
		amount: payload.amount
	};

	let config = {
		headers: { Authorization: process.env.KHALTI_SECRET_KEY }
	};

	try {
		const response = await axios.post('https://khalti.com/api/v2/payment/verify/', data, config);
		res.status(200).json({ success: true, message: 'Payment successful' });
	} catch (error) {
		res.status(200).json({ success: false, message: 'Payment Unsuccessful' });
	}
});
