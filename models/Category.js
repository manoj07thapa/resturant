import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
	category: [ String ]
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
