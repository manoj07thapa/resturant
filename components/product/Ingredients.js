import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

export default function Ingredients({ description }) {
	return (
		<div className="w-full">
			<Disclosure>
				{({ open }) => (
					<Fragment>
						<div className="flex justify-between w-full px-1 py-2 text-medium font-medium text-left">
							<span>Ingredients</span>
							<ChevronDownIcon className={`${open ? 'transform rotate-90' : ''} w-5 h-5 text-gray-500`} />
						</div>
						<Disclosure.Panel static className="px-2  pb-2 text-sm text-gray-500">
							<ul className="space-y-1 list-disc pl-3">
								<li>Chicken</li>
								<li>Garlic</li>
								<li>Flower</li>
								<li>Honey</li>
								<li>Potato</li>
							</ul>
						</Disclosure.Panel>
					</Fragment>
				)}
			</Disclosure>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<Fragment>
						<div className="flex justify-between w-full px-1 py-2 text-medium font-medium text-left">
							<span>Description</span>
							<ChevronDownIcon
								className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`}
							/>
						</div>
						<Disclosure.Panel static className="px-2  pb-1 text-sm text-gray-500">
							{description}
						</Disclosure.Panel>
					</Fragment>
				)}
			</Disclosure>
		</div>
	);
}

function ChevronDownIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
