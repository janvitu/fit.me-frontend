import { NavLink } from "@components/atoms";
export function NavStatics({ routes }) {
	return (
		<nav className="flex h-full space-x-10">
			{routes.map(({ name, path, text }) => (
				<NavLink key={name} href={path}>
					{text}
				</NavLink>
			))}
		</nav>
	);
}

NavStatics.defaultProps = {
	routes: [{ name: "desc name", path: "#", text: "Link text" }],
};
