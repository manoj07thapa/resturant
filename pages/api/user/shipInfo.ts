import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import ShipInfo from '../../../models/ShipInfo';
import { shipInfoSchema } from '../../../middlewares/shipInfoSchema';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { validate } from '../../../middlewares/validate';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	dbConnect();
	switch (req.method) {
		case 'GET':
			await getShipInfo(req, res);
			break;
		case 'POST':
			await createShipInfo(req, res);
			break;
		case 'PUT':
			await editShipInfo(req, res);
			break;
	}
};

const getShipInfo = async (req: NextApiRequest, res: NextApiResponse) => {
	const { user } = getSession(req, res);

	try {
		const ship = await ShipInfo.findOne({ email: user.email });

		res.status(200).json({ success: true, shipInfo: ship });
	} catch (error) {
		res.status(401).json({ success: false, message: 'Unable to fetch shipping info' });
	}
};

const createShipInfo = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { fullname, email, zone, district, phone, city, area, address } = req.body.values;

		const shipInfo = await new ShipInfo({ fullname, email, zone, district, phone, city, area, address }).save();

		res.json({ success: true, shipInfo });
	} catch (error) {
		res.json(error);
	}
};

const editShipInfo = async (req: NextApiRequest, res: NextApiResponse) => {
	const { user } = getSession(req, res);

	const { fullname, email, zone, district, phone, city, area, address } = req.body.values;

	try {
		const shipInfo = await ShipInfo.findOneAndUpdate(
			{ email: user.email },
			{
				$set: {
					fullname: fullname,
					email: email,
					zone: zone,
					district: district,
					phone: phone,
					city: city,
					area: area,
					address: address
				}
			},
			{ useFindAndModify: false }
		);
		return res.json({ success: true, shipInfo });
	} catch (error) {
		res.json(error);
	}
};

export default withApiAuthRequired(validate(shipInfoSchema, handler));
