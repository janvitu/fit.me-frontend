import { NavLink } from "@components/atoms";

import { ButtonLinkFilledBase, ButtonLinkOutlineBase } from "@components/atoms";
export function NavStatics({ routes, toggled }) {
	return (
		<nav
			className={`absolute inset-x-0 md:w-auto overflow-hidden pb-6 md:pb-0 bg-white top-full flex justify-center items-center flex-col md:flex-row md:static md:h-full md:space-x-10 transition-all md:transform origin-top md:scale-100 ${
				toggled ? "scale-y-100" : "scale-y-0"
			}`}
		>
			{routes.map(({ name, path, text }) => (
				<NavLink key={name} href={path}>
					{text}
				</NavLink>
			))}
			<div className="flex md:hidden space-x-2 items-center">
				<ButtonLinkOutlineBase>Registrace</ButtonLinkOutlineBase>
				<ButtonLinkFilledBase>Přihlásit se</ButtonLinkFilledBase>
			</div>
		</nav>
	);
}

NavStatics.defaultProps = {
	routes: [{ name: "desc name", path: "#", text: "Link text" }],
};
