import dbConnect from '../../../utils/dbConnect';
import { getPaginatedProducts } from '../../../dbQuery/getPaginatedProducts';
import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
	dbConnect();

	switch (req.method) {
		case 'GET':
			await getProducts(req, res);
			break;
	}
}

const getProducts = async (req, res) => {
	try {
		const products = await getPaginatedProducts(req.query);
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find products' });
	}
};
