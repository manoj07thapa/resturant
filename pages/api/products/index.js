import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { productSchema } from '../../../middlewares/productSchema';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../middlewares/validate';
import { getPaginatedProducts } from '../../../dbQuery/getPaginatedProducts';

const handler = async (req, res) => {
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

const getProducts = async (req, res) => {
	try {
		const products = await getPaginatedProducts(req.query);
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find products' });
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
		chefSpecial,
		price,
		description,
		popular,
		speciality,
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
			chefSpecial,
			price,
			description,
			popular,
			speciality,
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
