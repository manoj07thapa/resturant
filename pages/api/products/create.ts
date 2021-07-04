import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { productSchema } from '../../../middlewares/validation';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	dbConnect();
	const { category, title, price, files, description } = req.body;

	const product = new Product({ category, title, price, description, files }).save();
	res.status(201).json({ ...req.body, method: req.method, message: 'Product created' });
};

export function validate(schema: OptionalObjectSchema<ObjectShape>, handler: NextApiHandler) {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		if ([ 'POST', 'PUT' ].includes(req.method || '')) {
			try {
				await schema.validate(req.body);
			} catch (err) {
				return res.status(400).json(err);
			}
		}
		await handler(req, res);
	};
}

export default withApiAuthRequired(validate(productSchema, handler));
