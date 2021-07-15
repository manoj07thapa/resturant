import Cart from '../../../models/Cart';
import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function cart(req: NextApiRequest, res: NextApiResponse) {
	await dbConnect();
	switch (req.method) {
		case 'PUT':
			await addProduct(req, res);
			break;
		case 'DELETE':
			await removeProduct(req, res);
			break;
		case 'GET':
			await getCartByUser(req, res);
			break;
	}
});

const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
	const { user } = getSession(req, res);

	const { quantity, product } = req.body;
	const productId = product._id;

	const cart = await Cart.findOne({ user: user.email });

	try {
		if (quantity < 1 || quantity > 5) {
			return res.status(401).json({ message: 'Please choose between 1 to 5.' });
		}

		if (!cart) {
			const newProduct = { quantity, product: productId };

			return await new Cart({ user: user.email, products: newProduct }).save();
		}

		/**checking if the product id from client exist in product array of cart colection */

		const productExists = cart.products.some((pdoc: any) => productId === pdoc.product.toString());

		if (productExists) {
			const cp = await Cart.findOneAndUpdate(
				{ _id: cart._id, 'products.product': productId },
				{ $inc: { 'products.$.quantity': quantity } },
				{ useFindAndModify: false }
			);
		} else {
			const newProduct = { quantity, product: productId };
			await Cart.findOneAndUpdate(
				{ _id: cart._id },
				{ $push: { products: newProduct } },
				{ useFindAndModify: false }
			);
		}

		const newCart = await Cart.findOne({ user: user.email });
		res.status(200).json({ success: true, message: 'product added to cart', newCart });
	} catch (error) {
		console.log('CartError', error);
		return res.status(400).json({ success: false, message: 'Couldnot add product to cart' });
	}
};

const removeProduct = async (req: NextApiRequest, res: NextApiResponse) => {
	const { user } = getSession(req, res);

	const { productId } = req.body;
	try {
		const cart = await Cart.findOneAndUpdate(
			{ user: user.email },
			{ $pull: { products: { product: productId } } },
			{ useFindAndModify: false }
		).populate('products.product', Product);
		res.status(200).json({ success: true, cartProducts: cart.products });
	} catch (error) {
		console.log('ErrorDelete', error);
		res.status(401).json({ success: false, message: 'Unable to delete product' });
	}
};

const getCartByUser = async (req: NextApiRequest, res: NextApiResponse) => {
	const { user } = getSession(req, res);

	try {
		const cart = await Cart.findOne({ user: user.email }).populate('products.product', Product);

		res.status(200).json({ success: true, cartProducts: cart.products });
	} catch (error) {
		console.log(error);
		res.status(401).json({ success: false, message: 'Unable to fetch cart for this user' });
	}
};
