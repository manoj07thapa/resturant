import { resourceSchema } from '../../../middlewares/resourceSchema';
import dbConnect from '../../../utils/dbConnect';
import Resource from '../../../models/Resource';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../middlewares/validate';

const handler = async (req, res) => {
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

const getResources = async (req, res) => {
	try {
		const resources = await Resource.find({});
		res.status(200).json(resources);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot get resources' });
	}
};

const createResource = async (req, res) => {
	const { category, title, subtitle, subtitle1, subtitle2, files, description } = req.body.values;

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

const editResource = async (req, res) => {};
const deleteResource = async (req, res) => {};

export default withApiAuthRequired(validate(resourceSchema, handler));
