import Link from "next/link";
import { useState } from "react";

import { ButtonLink, Hamburger } from "@src/atoms";
import { NavStatics } from "@src/molecules";
import { Logo } from "@src/partials/Logo";
import { ROUTES } from "@src/constants";

export function NavBarStatic() {
	const [toggled, setToggled] = useState(false);
	function toggle() {
		setToggled(!toggled);
	}

	return (
		<div className="sticky top-0 z-50 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/" passHref>
							<a className="h-12 hover:scale-105 transition-all">
								<Logo />
							</a>
						</Link>
					</div>
					<NavStatics toggled={toggled} routes={ROUTES} />
					<div className="absolute right-0 md:hidden">
						<Hamburger toggle={toggle} toggled={toggled} />
					</div>
					<div className="hidden md:flex space-x-2 items-center justify-end md:flex-1 lg:w-0">
						<ButtonLink variant="base" isOutline={true} href="/registrace">
							Registrace
						</ButtonLink>
						<ButtonLink variant="base" isOutline={false} href="/prihlasit-se">
							Přihlásit se
						</ButtonLink>
					</div>
				</div>
			</div>
		</div>
	);
}
