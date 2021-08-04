import React from 'react';

export default function SidebarTest() {
	return (
		<div className="bg-gray-300 w-64 py-4 flex flex-col h-screen ">
			<h4 className="text-gray-900 text-xl font-bold"> Site Logo</h4>
			<nav className="mt-4  space-y-7 flex-1 overflow-auto">
				<a href="" className="block py-2">
					nav1
				</a>
				<a href="" className="block py-2">
					nav2
				</a>
				<a href="" className="block py-2">
					nav3
				</a>
				<a href="" className="block py-2">
					nav4
				</a>
			</nav>
			<div className="mt-auto flex-shrink-0">footer</div>
		</div>
	);
}
