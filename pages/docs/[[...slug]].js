import { useRouter } from 'next/router';
import Link from 'next/link';
import useSwr from 'swr';
import { stringify } from 'querystring';
import CreateProduct from '../../components/dashboard/CreateProduct';

/**Use catch all routing for dashboard using shallow routing links */

export default function Docs() {
	const router = useRouter();
	const { slug = [] } = router.query;
	console.log('SLUG', slug);
	const query = Object.assign({}, slug);
	console.log('QUERY', query);

	const datatest = [ 'test', 'test1', 'test2', 'test3' ];
	const { data } = useSwr('/api/products?' + stringify(query), {
		dedupingInterval: 60000
	});
	return (
		<div className="flex">
			<div className="flex flex-col w-72 bg-gray-100">
				<Link href="/docs">
					<a>docs</a>
				</Link>
				<Link href="/docs/craeteProducts">
					<a>feature1</a>
				</Link>
				<Link href="/docs/f2">
					<a>feature2</a>
				</Link>
				<Link href="/docs/f3">
					<a>feature3</a>
				</Link>
			</div>
			{/* <div className="ml-14">{datatest.map((d) => <h1 key={d}>{d}</h1>)}</div> */}
			{query[0] === 'createProducts' && <CreateProduct />}
		</div>
	);
}
