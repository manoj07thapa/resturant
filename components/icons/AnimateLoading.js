export default function AnimateLoading() {
	return (
		<div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
			<div className="animate-pulse flex flex-col  space-x--0 px-3">
				<div className=" bg-gray-400 h-36 w-80 px-12" />
				<div className="flex-1 space-y-4 py-1">
					<div className="h-4 bg-gray-400 rounded w-3/4" />
					<div className="space-y-2">
						<div className="h-4 bg-gray-400 rounded" />
					</div>
				</div>
			</div>
		</div>
	);
}
