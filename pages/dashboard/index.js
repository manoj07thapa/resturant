import Sidebar from '../../components/dashboard/Sidebar';
import SidebarTest from '../../components/dashboard/SidebarTest';
import CreateProduct from '../../components/dashboard/CreateProduct';
import CreateResource from '../../components/dashboard/CreateResource';
import AddCategory from '../../components/dashboard/AddCategory';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import dbConnect from '../../utils/dbConnect';
import Category from '../../models/Category';
import ProductList from '../../components/dashboard/ProductList';

export default withPageAuthRequired(function Dashboard({ categories }) {
	const { query } = useRouter();

	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="lg:flex  ">
				<Sidebar />
				<main className="flex-1 ">
					{query.query === 'create-product' && <CreateProduct categories={categories} />}
					{query.query === 'create-resource' && <CreateResource />}
					{query.query === 'create-category' && <AddCategory />}
					{query.query === 'product-list' && <ProductList />}
				</main>
			</div>
		</div>
	);
});

export async function getServerSideProps() {
	await dbConnect();
	const res = await Category.find({});
	const cat = JSON.parse(JSON.stringify(res));

	return {
		props: { categories: cat }
	};
}
