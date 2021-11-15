export function DelimiterWide({ variant }) {
	const handleVariant = (variant) => {
		switch (variant) {
			case "thin":
				return "h-px";
			case "thick":
				return "h-[3px]";
			default:
				return "h-px";
		}
	};
	return (
		<hr className={`${handleVariant(variant)} border-none bg-gray-300 max-w-[90vw] mx-auto`} />
	);
}
