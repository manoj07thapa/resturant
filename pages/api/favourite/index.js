import Favourite from '../../../models/Favourite';
import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function cart(req, res) {
	await dbConnect();
	switch (req.method) {
		case 'PUT':
			await addToFavourite(req, res);
			break;
		case 'DELETE':
			await removeFromFavourite(req, res);
			break;
		case 'GET':
			await getFavByUser(req, res);
			break;
	}
});

const addToFavourite = async (req, res) => {
	const session = getSession(req, res);
	const user =  session?.user
	const product = req.body;
	const productId = product._id;

	const favourite = await Favourite.findOne({ user: user?.email });

	try {
		if (!favourite) {
			const newFavProduct = { product: productId };

			return await new Favourite({ user: user?.email, products: newFavProduct }).save();
		}

		/**checking if the product id from client exist in product array of cart colection */

		const productExists = favourite.products.some((pdoc) => productId === pdoc.product.toString());

		if (productExists) {
			res.json({ message: 'Product already exist in favourites list' });
		} else {
			const newProduct = { product: productId };
			await Favourite.findOneAndUpdate(
				{ _id: favourite._id },
				{ $push: { products: newProduct } },
				{ useFindAndModify: false }
			);
			res.status(200).json({ success: true, message: 'product added to favourite' });
		}
	} catch (error) {
		console.log('CartError', error);
		return res.status(400).json({ success: false, message: 'Couldnot add product to favourite' });
	}
};

const removeFromFavourite = async (req, res) => {
	const session = getSession(req, res);
	const user =  session?.user
	const { productId } = req.body;
	try {
		const favourite = await Favourite.findOneAndUpdate(
			{ user: user?.email },
			{ $pull: { products: { product: productId } } },
			{ useFindAndModify: false }
		).populate('products.product', Product);
		res.status(200).json({ success: true });
	} catch (error) {
		console.log('ErrorDelete', error);
		res.status(401).json({ success: false, message: 'Unable to delete product from favourite' });
	}
};

const getFavByUser = async (req, res) => {
	const session = getSession(req, res);
	const user =  session?.user
	try {
		const favourite = await Favourite.findOne({ user: user?.email }).populate('products.product', Product);

		res.status(200).json({ success: true, favProducts: favourite.products });
	} catch (error) {
		console.log(error);
		res.status(401).json({ success: false, message: 'Unable to fetch favourites for this user' });
	}
};
