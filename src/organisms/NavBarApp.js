import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

import { Button, Hamburger } from "@src/atoms";
import { NavApp, ProfilePopup } from "@src/molecules";
import { APPROUTES } from "@src/constants";

function logout() {
	localStorage.removeItem("token");
	Router.push("/prihlasit-se");
}

export function NavBarApp({}) {
	const [toggled, setToggled] = useState(false);
	function toggle() {
		setToggled(!toggled);
	}
	return (
		<div className="sticky top-0 z-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/sportoviste" passHref>
							<a className="h-12 hover:scale-105 transition-all">
								<Image src="/logo.svg" alt="logo" width={144} height={48} />
							</a>
						</Link>
					</div>
					<NavApp toggled={toggled} routes={APPROUTES} />
					<div className="absolute right-0 md:hidden">
						<Hamburger toggle={toggle} toggled={toggled} />
					</div>
					<div className="hidden md:flex space-x-2 items-center justify-end md:flex-1 lg:w-0">
						<ProfilePopup />
						<Button isOutline={true} onClickHandler={logout}>
							Odhlásit se
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
