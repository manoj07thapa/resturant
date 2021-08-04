import dbConnect from '../../../utils/dbConnect';
import Category from '../../../models/Category';
import { prodCatSchema } from '../../../middlewares/prodCatSchema';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../middlewares/validate';

const handler = async (req, res) => {
	dbConnect();
	switch (req.method) {
		case 'GET':
			await getProdCategory(req, res);
			break;
		case 'PUT':
			await createProdCategory(req, res);
			break;

		case 'DELETE':
			await deleteProdCategory(req, res);
			break;
	}
};

const getProdCategory = async (req, res) => {
	try {
		const prodCat = await Category.find({});
		res.status(200).json(prodCat);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find prodCat' });
	}
};

const createProdCategory = async (req, res) => {
	const { productCategory } = req.body.values;

	const cat = await Category.find({});

	try {
		if (cat) {
			await Category.findOneAndUpdate(
				{ _id: cat[0]._id },
				{ $push: { category: productCategory } },
				{ useFindAndModify: true }
			);
			res.status(201).json({ message: 'prodCat created' });
		}
	} catch (error) {
		console.log('SERVERERROR', error);
		res.json({ err: 'Something went wrong' });
	}
};

const deleteProdCategory = async (req, res) => {};

export default withApiAuthRequired(validate(prodCatSchema, handler));
