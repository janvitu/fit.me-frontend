import { DelimiterWide } from "@src/atoms";
import { FooterLinksWrapper } from "@src/molecules";
import { ROUTES, APPROUTES } from "@src/constants";

export function FooterApp() {
	return (
		<footer className="bg-gray-800 text-white py-16 text-center">
			<div className="space-y-6">
				<nav className="md:flex-grow md:flex md:flex-row md:justify-around md:uppercase ">
					<FooterLinksWrapper
						routes={[{ name: "home", path: "/", text: "Domovská stránka" }, ...ROUTES]}
					/>
				</nav>
				<DelimiterWide />
				<nav className="md:flex-grow md:flex md:flex-row md:justify-around md:uppercase ">
					<FooterLinksWrapper
						routes={[...APPROUTES, { name: "profile", path: "/profil", text: "Profil" }]}
					/>
				</nav>
				<div className="text-gray-300">
					<p>
						© 2021 <span className="text-main-800 font-medium">FitMe</span> Všechna práva vyhrazena
					</p>
				</div>
			</div>
		</footer>
	);
}
