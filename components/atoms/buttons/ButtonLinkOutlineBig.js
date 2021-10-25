import Link from "next/link";
export function ButtonLinkOutlineBig({ href, children }) {
	return (
		<div className="mt-3 rounded-md shadow ">
			<Link href={href} passHref>
				<a className="w-full min-w-[10ch] flex items-center justify-center px-8 py-3 border border-main-400 text-base font-medium rounded-md text-main-400 hover:text-main-600 hover:border-main-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all">
					{children}
				</a>
			</Link>
		</div>
	);
}
ButtonLinkOutlineBig.defaultProps = {
	href: "#",
};
