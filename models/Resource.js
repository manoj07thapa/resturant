import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
	category: {
		type: String,
		required: [ true, 'Please add a category' ]
	},

	title: {
		type: String,
		required: [ true, 'Please add  this field' ],
		maxlength: [ 100, 'Title cannot be more than 100 characters' ]
	},
	subtitle: {
		type: String,
		required: [ true, 'Please add this field' ],
		maxlength: [ 100, 'Title cannot be more than 100 characters' ]
	},
	subtitle1: {
		type: String
	},
	subtitle2: {
		type: String
	},
	description: {
		type: String,
		required: true,
		maxlength: [ 1000, 'Description cannot be more than 1000 characters' ]
	},
	files: {
		type: [ {} ],
		required: true
	}
});

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
