import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const favSchema = new mongoose.Schema(
	{
		user: {
			type: String,
			required: true
		},
		products: [
			{
				product: { type: ObjectId, ref: 'Product' }
			}
		]
	},
	{
		timestamps: true
	}
);

export default mongoose.models.Favourite || mongoose.model('Favourite', favSchema);
