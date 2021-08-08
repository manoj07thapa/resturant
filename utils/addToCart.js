import axios from 'axios';
const addToCart = async () => {
	try {
		const res = await axios.put(`/api/cart`, values);
		setCartItems(res.data.newCart.products);
	} catch (error) {
		console.log(error);
	}
};
