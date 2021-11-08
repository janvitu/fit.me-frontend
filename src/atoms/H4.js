export function H4({ variant, children }) {
	const handleVariant = (variant) => {
		switch (variant) {
			case "big":
				return "";
			case "small":
				return "";
			default:
				return "text-lg text-gray-500";
		}
	};
	return <h4 className={handleVariant(variant)}>{children}</h4>;
}
