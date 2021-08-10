import Create from './Create';
import ProductTable from './ProductTable';
export default function Sidebar() {
	return (
		<div className=" lg:w-64 lg:h-screen bg-gray-100 lg:fixed lg:top-0 lg:left-0  lg:mt-20  lg:overflow-y-auto   ">
			<Create />
			<ProductTable />
			<footer className="hidden  lg:flex px-2 items-center justify-between mt-12">
				<p className="text-xs text-gray-400">All rights reserved</p>
				<span className="text-xs text-gray-400">WebMolecule</span>
			</footer>
		</div>
	);
}
