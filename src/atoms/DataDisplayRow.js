import { useEffect, useRef, useState } from "react";

export function DataDisplayRow({ fieldName, fieldValue }) {
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(fieldValue);
	const inputRef = useRef(null);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	useEffect(() => {
		if (isEdit) {
			inputRef.current.focus();
		}
	}, [isEdit]);

	return (
		<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
			<dt className="text-sm font-medium text-gray-500">{fieldName}</dt>
			<dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
				{isEdit && (
					<input
						type="text"
						className="flex-grow"
						onChange={handleChange}
						value={value}
						ref={inputRef}
					/>
				)}
				{!isEdit && <span className="flex-grow">{value}</span>}
				<span className="ml-4 flex-shrink-0">
					<button
						type="button"
						onClick={() => {
							setIsEdit(!isEdit);
						}}
						className="
                bg-white
                rounded-md
                font-medium
                text-red-800
                hover:text-red-900
								min-w-[48px]
              "
					>
						{isEdit ? "Uložit" : "Upravit"}
					</button>
				</span>
			</dd>
		</div>
	);
}
