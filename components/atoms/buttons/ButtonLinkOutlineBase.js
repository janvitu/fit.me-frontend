export function ButtonLinkOutlineBase({ href, children }) {
	return (
		<div className="rounded-md shadow">
			<a
				href={href}
				className="flex items-center justify-center min-w-[10ch] px-5 py-3 border border-main-400 text-base font-medium rounded-md text-main-400 bg-white hover:bg-gray-100 hover:text-main-600 hover:border-main-600"
			>
				{children}
			</a>
		</div>
	);
}

ButtonLinkOutlineBase.defaultProps = {
	href: "#",
};
