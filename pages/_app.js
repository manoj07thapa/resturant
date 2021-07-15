import '../styles/globals.css';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Navbar from '../components/header/Navbar';
import axios from 'axios';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
	const { user } = pageProps;

	return (
		<UserProvider user={user}>
			<Navbar />
			<SWRConfig value={{ fetcher: (url) => axios(url).then((r) => r.data) }}>
				<Component {...pageProps} />
			</SWRConfig>
		</UserProvider>
	);
}

export default MyApp;
