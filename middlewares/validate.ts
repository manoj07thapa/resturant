import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

export function validate(schema: OptionalObjectSchema<ObjectShape>, handler: NextApiHandler) {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		if ([ 'POST', 'PUT' ].includes(req.method || '')) {
			try {
				await schema.validate(req.body.values);
			} catch (err) {
				return res.status(400).json(err);
			}
		}
		handler(req, res);
	};
}
