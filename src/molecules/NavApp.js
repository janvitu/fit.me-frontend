import Link from "next/link";
import { NavLink } from "@src/atoms";
import { ProfileImageLink } from "@src/molecules";
import { useRouter } from "next/router";
import { ButtonLink } from "@src/atoms";

export function NavApp({ routes, toggled }) {
	const router = useRouter();
	return (
		<nav
			className={`absolute inset-x-0 md:w-auto overflow-hidden pb-6 md:pb-0 bg-white top-full flex justify-center items-center flex-col md:flex-row md:static md:h-full md:space-x-10 transition-all md:transform origin-top md:scale-100 ${
				toggled ? "scale-y-100" : "scale-y-0"
			}`}
		>
			<div className="md:hidden">
				<ProfileImageLink variant="small" />
			</div>
			{routes.map(({ name, path, text }) => (
				<NavLink key={name} href={path} linkIsActive={router.asPath === path}>
					{text}
				</NavLink>
			))}
			<div className="flex md:hidden space-x-2 items-center">
				<ButtonLink variant="base" isOutline={true} href="/prihlasit-se">
					Odhlásit se
				</ButtonLink>
			</div>
		</nav>
	);
}

NavApp.defaultProps = {
	routes: [{ name: "desc name", path: "#", text: "Link text" }],
};
