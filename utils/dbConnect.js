import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	const db = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	connection.isConnected = db.connections[0].readyState;
	console.log(connection.isConnected, 'Db connected');

	// if (mongoose.connection[0].readyState) {
	// 	console.log('Db already connected');
	// 	return;
	// }
	// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

	// mongoose.connection.on('connected', () => {
	// 	console.log('Connection to mongodb  established');
	// });

	// mongoose.connection.on('error', (err) => {
	// 	console.log('Error connecting to mongodb', err);
	// });
}

export default dbConnect;
