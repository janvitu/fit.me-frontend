import Link from "next/link";
export function NavLink({ href, children, linkIsActive }) {
	return (
		<Link href={href} passHref>
			<a
				className={`group relative cursor-pointer hover:text-main-600 py-3 ${
					linkIsActive ? "text-main-500" : ""
				}
				`}
			>
				{children}
				<div
					className={`w-0 md:group-hover:w-full h-1 bg-main-600 transition-all ${
						linkIsActive ? "md:w-full bg-main-500" : "w-0"
					}`}
				/>
			</a>
		</Link>
	);
}

NavLink.defaultProps = {
	href: "#",
	linkIsActive: false,
};
