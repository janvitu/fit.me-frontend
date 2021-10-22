export function ButtonLinkFilledBase({ href, children }) {
	return (
		<div className="rounded-md shadow">
			<a
				href={href}
				className="flex items-center justify-center min-w-[10ch] px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-main-400 hover:bg-main-600"
			>
				{children}
			</a>
		</div>
	);
}

ButtonLinkFilledBase.defaultProps = {
	href: "#",
};
