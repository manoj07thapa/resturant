import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Pagination({ totalPages }: { totalPages?: number | undefined }) {
	const { query } = useRouter();

	const pageNumbers = [];

	if (totalPages) {
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}

	}


	return (
		<div>
			<ul className="flex ml-4">
				{pageNumbers.map((n) => (
					<li key={n} className="px-3 ">
						<Link
							href={{
								pathname: '/products',
								query: { ...query, page: n }
							}}
							shallow
						>
							<a className="px-2 py-1 bg-gray-700 text-white rounded-full">{n}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
