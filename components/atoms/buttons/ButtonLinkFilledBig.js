export function ButtonLinkFilledBig({ href, children }) {
	return (
		<div className="mt-3 rounded-md shadow ">
			<a
				href={href}
				className="w-full min-w-[10ch] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-main-400 hover:bg-main-600 md:py-4 md:text-lg md:px-10 transition-all"
			>
				{children}
			</a>
		</div>
	);
}
ButtonLinkFilledBig.defaultProps = {
	href: "#",
};
