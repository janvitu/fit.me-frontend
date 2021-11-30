import Link from "next/link";
export function ButtonLink({ href, children, variant, isOutline }) {
	const outlineHandler = (outline) =>
		outline
			? "border-main-400 text-main-400 hover:bg-gray-100 hover:text-main-600 bg-white hover:border-main-600"
			: "border-transparent text-black bg-main-400 hover:bg-main-600";

	const variantHandler = (variant) => {
		switch (variant) {
			case "big":
				return "w-full px-8 py-3 md:py-4 md:text-lg md:px-10 transition-all";
			default:
				return "px-5 py-3";
		}
	};
	return (
		<div className="rounded-md shadow">
			<Link href={href} passHref>
				<a
					className={`flex items-center justify-center min-w-[10ch] border text-base font-medium rounded-md ${outlineHandler(
						isOutline,
					)} ${variantHandler(variant)}`}
				>
					{children}
				</a>
			</Link>
		</div>
	);
}

ButtonLink.defaultProps = {
	href: "#",
	isOutline: false,
	variant: "base",
};
