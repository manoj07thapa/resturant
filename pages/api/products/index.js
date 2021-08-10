import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { productSchema } from '../../../middlewares/productSchema';
import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';
import { validate } from '../../../middlewares/validate';

const handler = async (req, res) => {
	dbConnect();

	switch (req.method) {
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

const createProduct = async (req, res) => {
	const {
		category,
		title,
		subtitle,
		ingredients,
		format,
		discount,
		criteria,
		price,
		description,
		files
	} = req.body.values;
	try {
		await new Product({
			category,
			title,
			subtitle,
			ingredients,
			format,
			discount,
			price,
			description,
			criteria,
			files
		}).save();
		res.status(201).json({ message: 'Product created' });
	} catch (error) {
		res.json({ err: 'Something went wrong' });
	}
};

const editProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};

export default withApiAuthRequired(validate(productSchema, handler));
