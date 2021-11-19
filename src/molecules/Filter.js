import { useState } from "react";
import { FilterOption } from "@src/atoms";

export function Filter({ name, subject, options, filters, setFilters }) {
	const [toggled, setToggled] = useState(false);

	const addFilterOptionHandler = (option) => {
		let arr = filters.tags;
		if (filters.tags.includes(option)) {
			const index = arr.indexOf(option);
			if (index > -1) arr.splice(index, 1);
		} else {
			arr.push(option);
		}
		setFilters((filters) => ({ ...filters, tags: arr }));
	};

	return (
		<div className="z-100">
			<div className="relative inline-block text-left">
				<div>
					<button
						onClick={() => setToggled(!toggled)}
						type="button"
						className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
						id="menu-button"
						aria-expanded="true"
						aria-haspopup="true"
					>
						{name}
						<svg
							className="-mr-1 ml-2 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				{toggled && (
					<div
						className="absolute origin-top-right left-0 mt-2 w-56 max-h-80 overflow-y-scroll  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-100"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabIndex="-1"
					>
						{options.map((option, index) => {
							return (
								<FilterOption
									name={option}
									addFilterOption={(option) => addFilterOptionHandler(option)}
									// selected={filters[subject].includes(option)}
									selected={filters.tags.includes(option)}
									key={index}
								/>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

Filter.defaultProps = {
	name: "Tagy",
	options: ["Powerlifting", "Yoga", "Badminton", "Tennis", "Squash", "FitBox"],
};
