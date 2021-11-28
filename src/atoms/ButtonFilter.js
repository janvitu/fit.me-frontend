import deleteIcon from "@assets/img/icons8-delete.svg";
import Image from "next/dist/client/image";
export function ButtonFilter({ name, filters, setFilters }) {
	const clickOptionHandler = (name, filters, setFilters) => {
		let arr = filters.tags;
		const index = arr.indexOf(name);
		arr.splice(index, 1);
		setFilters((filters) => ({ ...filters, tags: arr }));
	};

	return (
		<button
			type="button"
			className="flex gap-2 items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-500 bgwhite hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
			onClick={() => clickOptionHandler(name, filters, setFilters)}
		>
			<Image src={deleteIcon.src} alt={deleteIcon.alt} width="10" height="10" />
			{name}
		</button>
	);
}
