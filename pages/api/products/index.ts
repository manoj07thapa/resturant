import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { productSchema } from '../../../middlewares/validation';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../middlewares/validate';
import { getPaginatedProducts } from '../../../dbQuery/getPaginatedProducts';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	dbConnect();
	switch (req.method) {
		case 'GET':
			await getProducts(req, res);
			break;
		case 'POST':
			await createProduct(req, res);
			break;
		case 'PUT':
			await editProduct(req, res);
			break;
		case 'DELETE':
			await deleteProduct(req, res);
			break;
	}
};

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const products = await getPaginatedProducts(req.query);
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find products' });
	}
};

const createProduct = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(req.body.values);

	const { category, title, price, description, files } = req.body.values;

	await new Product({ category, title, price, description, files }).save();
	res.status(201).json({ message: 'Product created' });
};

const editProduct = async (req: NextApiRequest, res: NextApiResponse) => {};

const deleteProduct = async (req: NextApiRequest, res: NextApiResponse) => {};

export default withApiAuthRequired(validate(productSchema, handler));
