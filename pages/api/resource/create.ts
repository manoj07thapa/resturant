import { resourceSchema } from './../../../middlewares/resourceSchema';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Resource from '../../../models/Resource';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	dbConnect();
	const { category, title, subtitle, subtitle1, subtitle2, files, description } = req.body;
	console.log(req.body);

	try {
		await new Resource({
			category,
			title,
			subtitle,
			subtitle1,
			subtitle2,
			description,
			files
		}).save();
		res.status(201).json({ message: 'Resource created' });
	} catch (error) {
		res.json(error);
	}
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

export default withApiAuthRequired(validate(resourceSchema, handler));
