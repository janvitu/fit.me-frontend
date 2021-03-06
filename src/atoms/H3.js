export function H3({ children, variant }) {
	const variantHandler = (variant) => {
		switch (variant) {
			case "big":
				return "";
			case "small":
				return "text-lg leading-6 font-medium text-gray-900";
			default:
				return "mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4x";
		}
	};

	return <h3 className={variantHandler(variant)}>{children}</h3>;
}

H3.defaultProps = {
	children: "Heading text",
	variant: "base",
};
