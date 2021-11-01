export function H2({ children, variant }) {
	const variantHandler = (variant) => {
		switch (variant) {
			case "big":
				return "text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl";
			case "small":
				return "leading-6 text-main-800 font-semibold tracking-wide uppercase";
			default:
				return "mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl";
		}
	};

	return <h2 className={variantHandler(variant)}>{children}</h2>;
}

H2.defaultProps = {
	children: "Heading text",
	variant: "base",
};
