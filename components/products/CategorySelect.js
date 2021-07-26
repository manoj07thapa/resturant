import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useField } from 'formik';

export default function CategorySelect({ name, categories }) {
	const [ selected, setSelected ] = useState(categories[0]._id);
	const [ _, __, helpers ] = useField(name);
	useEffect(
		() => {
			helpers.setValue(selected);
			// helpers.setTouched(true);
		},
		[ selected ]
	);

	return (
		<div className=" ">
			<Listbox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-purple-500 sm:text-sm">
						<span className="block truncate">{selected}</span>
						<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{categories.map((c, personIdx) => (
								<Listbox.Option
									key={personIdx}
									className={({ active }) =>
										`${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                                              cursor-default select-none relative py-2 pl-10 pr-4`}
									value={c._id}
								>
									{({ selected, active }) => (
										<Fragment>
											<span
												className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}
											>
												{c._id}
											</span>
											{selected ? (
												<span
													className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                                                                                    absolute inset-y-0 left-0 flex items-center pl-3`}
												>
													<CheckIcon className="w-5 h-5" aria-hidden="true" />
												</span>
											) : null}
										</Fragment>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}

function CheckIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function SelectorIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
