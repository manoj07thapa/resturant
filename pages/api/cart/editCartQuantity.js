import Cart from '../../../models/Cart';
import dbConnect from '../../../utils/dbConnect';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function cart(req, res) {

	await dbConnect();
	switch (req.method) {
		case 'PUT':
			await editCartQuantity(req, res);
			break;
	}
});

const editCartQuantity = async (req, res) => {
	const session = getSession(req, res);
	const user =  session?.user
	const { quantity, productId } = req.body;

	const cart = await Cart.findOne({ user: user?.email });

	try {
		if (quantity < 1 || quantity > 5) {
			return res.status(401).json({ message: 'Please choose between 1 to 5.' });
		}

		if (!cart) {
			const newProduct = { quantity, product: productId };

			await new Cart({ user: user?.email, products: newProduct }).save();
		}

		/**checking if the product id from client exist in product array of cart colection */

		const productExists = cart.products.some((pdoc) => productId === pdoc.product.toString());

		if (productExists) {
			const cp = await Cart.findOneAndUpdate(
				{ _id: cart._id, 'products.product': productId },
				{ $set: { 'products.$.quantity': quantity } },
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

		const newCart = await Cart.findOne({ user: user?.email });
		res.status(200).json({ success: true, message: 'product added to cart', newCart });
	} catch (error) {
		console.log('CartError', error);
		return res.status(400).json({ success: false, message: 'Couldnot add product to cart' });
	}
};
