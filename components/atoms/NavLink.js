import Link from "next/link";
export function NavLink({ href, children }) {
	return (
		<Link href={href} className="group relative hover:text-main-600 py-3" passHref>
			{children}
			<div className="w-0 md:group-hover:w-full h-1 bg-main-600 transition-all" />
		</Link>
	);
}

NavLink.defaultProps = {
	href: "#",
};
