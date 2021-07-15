import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();

// // pages/api/auth/[...auth0].js
// import { handleAuth, handleLogin,getSession } from '@auth0/nextjs-auth0';
// import Cart from '../../../models/Cart'
// import ShipInfo from '../../../models/ShipInfo'

// export default handleAuth({

// 	async login(req, res) {
//         const {user} = getSession(req,res)
// 		try {
// 			// Pass custom parameters to login
// 			await handleLogin(req, res, {

// 		  Cart({ email: user.email}).save();
// 		  ShipInfo({email: user.email }).save();
// 			});
// 		} catch (error) {
// 			res.status(error.status || 400).end(error.message);
// 		}
// 	}
// });
