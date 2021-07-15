import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema(
	{
		user: {
			type: String,
			required: true
		},
		products: [
			{
				quantity: { type: Number, default: 1 },
				product: { type: ObjectId, ref: 'Product' },
				isChecked: { type: Number, default: 1 },
				created: { type: Date, default: Date.now }
			}
		]
	},
	{
		timestamps: true
	}
);

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema);
