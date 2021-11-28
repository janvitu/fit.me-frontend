export function Sorter({ setFilters, filters }) {
	const isActivated = (filters, order) => {
		if (filters.order === order) {
			return "text-main-500";
		} else return "text-gray-700";
	};

	return (
		<span className="relative z-0 inline-flex  space-x-2">
			<button
				onClick={() => setFilters((filters) => ({ ...filters, order: "DESC" }))}
				type="button"
				className={`relative px-4 py-2 rounded-md shadow-sm border border-gray-300 bg-white text-sm font-medium  hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1
					${isActivated(filters, "DESC")}`}
			>
				Sestupně
			</button>
			<button
				onClick={() => setFilters((filters) => ({ ...filters, order: "ASC" }))}
				type="button"
				className={`relative px-4 py-2 rounded-md shadow-sm border border-gray-300 bg-white text-sm font-medium  hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1
					${isActivated(filters, "ASC")}`}
			>
				Vzestupně
			</button>
		</span>
	);
}
