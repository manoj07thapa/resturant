import { resourceSchema } from '../../../middlewares/resourceSchema';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Resource from '../../../models/Resource';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../middlewares/validate';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	dbConnect();
	switch (req.method) {
		case 'GET':
			await getResources(req, res);
			break;
		case 'POST':
			await createResource(req, res);
			break;
		case 'PUT':
			await editResource(req, res);
			break;
		case 'DELETE':
			await deleteResource(req, res);
			break;
	}
};

const getResources = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const resources = await Resource.find({});
		res.status(200).json(resources);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot get resources' });
	}
};

const createResource = async (req: NextApiRequest, res: NextApiResponse) => {
	const { category, title, subtitle, subtitle1, subtitle2, files, description } = req.body.values;
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

const editResource = async (req: NextApiRequest, res: NextApiResponse) => {};
const deleteResource = async (req: NextApiRequest, res: NextApiResponse) => {};

export default withApiAuthRequired(validate(resourceSchema, handler));
