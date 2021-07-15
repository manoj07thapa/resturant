import mongoose from 'mongoose';

const shipInfoSchema = new mongoose.Schema(
	{
		fullname: String,
		email: String,
		phone: Number,
		zone: String,
		district: String,
		city: String,
		area: String,
		address: String
	},
	{
		timestamps: true
	}
);

export default mongoose.models.ShipInfo || mongoose.model('ShipInfo', shipInfoSchema);
