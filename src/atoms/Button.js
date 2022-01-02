const variantHandler = (variant, isActive) => {
	switch (variant) {
		case "underline":
			return `group relative cursor-pointer hover:text-main-600 py-3 ${
				isActive ? "text-main-600 font-medium" : ""
			}`;
		default:
			return "flex items-center px-5 py-3 justify-center min-w-[10ch] border text-base font-medium rounded-md";
	}
};

const outlineHandler = (outline) =>
	outline
		? "border-main-400 text-main-400 hover:bg-gray-100 hover:text-main-600 bg-white hover:border-main-600"
		: "border-transparent text-black bg-main-400 hover:bg-main-600";

export function Button({ children, onClickHandler, isActive, variant, isOutline }) {
	return (
		<button
			className={variantHandler(variant, isActive) + " " + outlineHandler(isOutline)}
			onClick={onClickHandler}
		>
			{children}
			{variant === "underline" && (
				<div
					className={`w-0 sm:group-hover:w-full h-px bg-main-600 transition-all ${
						isActive ? "sm:w-full bg-main-500" : ""
					}`}
				/>
			)}
		</button>
	);
}
