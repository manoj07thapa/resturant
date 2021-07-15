import mongoose from 'mongoose';
import { UserModel } from '../interfaces/User';

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [ true, 'Please add an email' ]
	}
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
