export function Hamburger({ toggle, toggled }) {
	return (
		<div className="w-14 h-14">
			<button
				className={`w-full h-full block relative cursor-pointer z-50 bg-transparent border-0 ${
					toggled ? "hamburger--is-toggled" : ""
				}`}
				aria-label="menu"
				onClick={toggle}
			>
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/3 transition-all" />
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/2 transition-all" />
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/2 transition-all" />
				<span className="absolute bg-black h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-2/3 transition-all" />
			</button>
		</div>
	);
}
