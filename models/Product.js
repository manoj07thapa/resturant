import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
	category: {
		type: String,
		required: [ true, 'Please add a category' ]
	},

	title: {
		type: String,
		required: [ true, 'Please add a title' ],
		maxlength: [ 40, 'Title cannot be more than 40 characters' ]
	},
	subtitle: {
		type: String
	},
	format: {
		type: Array,
		required: true
	},
	ingredients: {
		type: Array,
		required: true
	},
	chefSpecial: Boolean,
	popular: Boolean,
	speciality: Boolean,
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true,
		maxlength: [ 1000, 'Description cannot be more than 1000 characters' ]
	},
	discount: {
		type: Number
	},
	files: {
		type: [ {} ],
		required: true
	},
	rating: {
		type: Number
	}
});

ProductSchema.index(
	{
		title: 'text',
		category: 'text',
		description: 'text'
	},
	{
		weights: {
			title: 5,
			category: 5,
			description: 1
		}
	}
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
