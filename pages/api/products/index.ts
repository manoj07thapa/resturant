// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import { getPaginatedProducts } from '../../../dbQuery/getPaginatedProducts';

export default async function products(req: NextApiRequest, res: NextApiResponse) {
	await dbConnect();
	switch (req.method) {
		case 'GET':
			await getProducts(req, res);
			break;
	}
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const products = await getPaginatedProducts(req.query);
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find products' });
	}
};

// const addProduct = async (req, res) => {
// 	const { category, title, price, files, description } = req.body;
// 	try {
// 		if (!category || !title || !price || !description) {
// 			return res.status(404).json({ success: false, error: 'Add all the required fields' });
// 		}
// 		const product = await new Product({ category, title, price, description, files }).save();
// 		res.status(201).json({ success: true, data: product, message: 'Product Created' });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json({ success: false, error: 'Sorry couldnot create the product' });
// 	}
// };
