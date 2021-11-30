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
				className="flex items-center gap-3 block px-4 py-2 text-sm "
				role="menuitem"
				tabIndex="-1"
				id="menu-item-0"
			>
				<input
					id="option"
					aria-describedby="option-description"
					name="option"
					type="checkbox"
					checked={isSelected}
					color="yellow"
					className=" focus:ring-main-500 h-4 w-4 bg-main-500 text-main-600 border-gray-300 rounded"
				/>
				{name}
			</a>
		</div>
	);
}
