import Cart from '../../../models/Cart';
import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function checkedCartItems(req, res) {
	await dbConnect();
	switch (req.method) {
		case 'PUT':
			await editCart(req, res);
			break;
	}
});

const editCart = async (req, res) => {
	const session = getSession(req, res);
	const user =  session?.user
	const { checkedItem } = req.body;

	try {
		const resp = await Cart.findOneAndUpdate(
			{ user: user?.email, 'products._id': checkedItem },
			{ $inc: { 'products.$.isChecked': 1 } },
			{ useFindAndModify: false }
		).populate('products.product', Product);

		res.status(200).json({ success: true, checkedCart: resp });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ success: false, error: 'server error' });
	}
};
