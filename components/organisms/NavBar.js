import { ButtonLinkFilledBase, ButtonLinkOutlineBase } from "@components/atoms";
import { NavStatics } from "@components/molecules";
import { Logo } from "@components/partials/Logo";
import Link from "next/link";

const ROUTES = [
	{ name: "partner", path: "/stante-se-partnerem", text: "Staňte se partnerem" },
	{ name: "about", path: "/o-nas", text: "O Nás" },
	{ name: "contact", path: "/kontakt", text: "Kontakt" },
];
export function Navbar() {
	return (
		<div className="relative bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/" passHref>
							<span className="sr-only">Fit.Me</span>
							<Logo />
						</Link>
					</div>
					<NavStatics routes={ROUTES} />
					<div className="hidden md:flex space-x-2 items-center justify-end md:flex-1 lg:w-0">
						<ButtonLinkOutlineBase>Registrace</ButtonLinkOutlineBase>
						<ButtonLinkFilledBase>Přihlásit se</ButtonLinkFilledBase>
					</div>
				</div>
			</div>
		</div>
	);
}
