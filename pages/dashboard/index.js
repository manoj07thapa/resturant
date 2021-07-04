import Sidebar from '../../components/dashboard/Sidebar';
import CreateProduct from '../../components/dashboard/CreateProduct';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Dashboard() {
	const { query } = useRouter();

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex">
				<Sidebar />

				{query.query === 'index' && <CreateProduct />}
			</div>
		</div>
	);
});