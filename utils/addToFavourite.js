import axios from 'axios';
export const addToFavourite = async (product) => {
	try {
		const res = await axios.put(`/api/favourite`, product);
		alert(res.data.message);
	} catch (error) {
		console.log(error);
	}
};
