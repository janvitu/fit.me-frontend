import { useState } from "react";

export function Hamburger() {
	const [toggled, setToggled] = useState(false);
	function toggle() {
		setToggled(!toggled);
	}

	return (
		<div className="h-7 w-7">
			<button
				className={`w-full h-full block relative cursor-pointer z-50 bg-transparent border-0 ${
					toggled ? "hamburger--is-toggled" : ""
				}`}
				aria-label="menu"
				onClick={toggle}
			>
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/4 transition-all" />
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/2 transition-all" />
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/2 transition-all" />
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-3/4 transition-all" />
			</button>
		</div>
	);
}
