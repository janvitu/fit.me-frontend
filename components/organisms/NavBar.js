import { ButtonLinkFilledBase, ButtonLinkOutlineBase } from "@components/atoms";
import { NavStatics } from "@components/molecules";
import { Logo } from "@components/partials/Logo";

const ROUTES = [
	{ name: "partner", path: "/stante-se-partnerem", text: "Staňte se partnerem" },
	{ name: "about", path: "/o-nas", text: "O Nás" },
	{ name: "contact", path: "/kontakt", text: "Kontakt" },
];
export function Navbar() {
	return (
		<div class="relative bg-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6">
				<div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div class="flex justify-start lg:w-0 lg:flex-1">
						<a href="/">
							<span class="sr-only">Fit.Me</span>
							<Logo />
						</a>
					</div>
					<NavStatics routes={ROUTES} />
					<div class="hidden md:flex space-x-2 items-center justify-end md:flex-1 lg:w-0">
						<ButtonLinkOutlineBase>Registrace</ButtonLinkOutlineBase>
						<ButtonLinkFilledBase>Přihlásit se</ButtonLinkFilledBase>
					</div>
				</div>
			</div>
		</div>
	);
}
