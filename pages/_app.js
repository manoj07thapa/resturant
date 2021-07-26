import '../styles/globals.css';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Header from '../components/header/Header';
import axios from 'axios';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
	const { user } = pageProps;

	return (
		<UserProvider user={user}>
			<Header />
			<SWRConfig value={{ fetcher: (url) => axios(url).then((r) => r.data) }}>
				<Component {...pageProps} />
			</SWRConfig>
		</UserProvider>
	);
}

export default MyApp;
