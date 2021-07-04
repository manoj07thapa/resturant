import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import Navbar from '../components/header/Navbar';
import axios from 'axios';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Navbar />
			<SWRConfig value={{ fetcher: (url) => axios(url).then((r) => r.data) }}>
				<Component {...pageProps} />
			</SWRConfig>
		</UserProvider>
	);
}

export default MyApp;
