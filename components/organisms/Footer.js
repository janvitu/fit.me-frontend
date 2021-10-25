import { FooterLink } from "@components/atoms";

const ROUTES = [
	{ name: "home", path: "/", text: "Domovská stránka" },
	{ name: "partner", path: "/stante-se-partnerem", text: "Staňte se partnerem" },
	{ name: "about", path: "/o-nas", text: "O Nás" },
	{ name: "contact", path: "/kontakt", text: "Kontakt" },
];

export function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-16 text-center">
			<div className="space-y-6">
				<nav className="md:flex-grow md:flex md:flex-row md:justify-around md:uppercase ">
					<ul className="flex flex-row flex-wrap gap-6 justify-center">
						{ROUTES.map(({ name, path, text }) => (
							<li key={name}>
								<FooterLink href={path}>{text}</FooterLink>
							</li>
						))}
					</ul>
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
