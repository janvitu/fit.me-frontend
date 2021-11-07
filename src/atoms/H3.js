export function H3({ children, variant }) {
	const variantHandler = (variant) => {
		switch (variant) {
			case "big":
				return "";
			case "small":
				return "mt-2 mb-8 text-2xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4x";
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
