import { useState } from "react";

export function DataDisplayRow({ fieldName, fieldValue }) {
	const [isEdit, setIsEdit] = useState(false);
	return (
		<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
			<dt className="text-sm font-medium text-gray-500">{fieldName}</dt>
			<dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
				{isEdit && <input type="text" className="w-full" value={fieldValue} />}
				{!isEdit && <span className="flex-grow">{fieldValue}</span>}
				<span className="ml-4 flex-shrink-0">
					<button
						type="button"
						onClick={() => setIsEdit(!isEdit)}
						className="
                bg-white
                rounded-md
                font-medium
                text-red-800
                hover:text-red-900
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-red-900
              "
					>
						{isEdit ? "Uložit" : "Upravit"}
					</button>
				</span>
			</dd>
		</div>
	);
}
