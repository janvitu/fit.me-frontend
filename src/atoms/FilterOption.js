import { useState } from "react";
export function FilterOption({ name, addFilterOption, selected }) {
	const [isSelected, setIsSelected] = useState(selected);
	return (
		<div
			className="py-2 pl-1 border-b-2 border-gray-50 hover:bg-gray-100"
			role="none"
			onClick={() => {
				setIsSelected(!isSelected);
				addFilterOption(name);
			}}
		>
			<a
				href="#"
				className={` block px-4 py-2 text-sm ${isSelected ? "text-main-500" : "text-gray-900"}`}
				role="menuitem"
				tabIndex="-1"
				id="menu-item-0"
			>
				{name}

				{/* Přidej obrázek selectnutí filtru */}
				{/* {isSelected && } */}
			</a>
		</div>
	);
}
