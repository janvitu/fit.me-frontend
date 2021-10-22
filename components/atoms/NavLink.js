export function NavLink({ href, children }) {
	return (
		<a href={href} className="group relative hover:text-main-600 py-3">
			{children}
			<div className="w-0 md:group-hover:w-full h-1 bg-main-600 transition-all" />
		</a>
	);
}

NavLink.defaultProps = {
	href: "#",
};
