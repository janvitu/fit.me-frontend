import { ButtonLink, HeadingWrapper, H2, H1, MainDescription, SmallDescription } from "@src/atoms";
import { ContactFooter } from "@src/organisms";
import { StaticSite } from "@src/templates";
import { DescriptionList } from "@src/organisms";
import { BigCardWithImage } from "@src/molecules";

const descriptionList = [
	{
		term: "Možnost přístupu do administrátorské konzole",
		description:
			"Hned po registraci získáte přístup do administrátorské konzole! Intuitivní a krásné.",
		svgDraw:
			"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
	},
	{
		term: "Propojení s vaším firemním účtem",
		description:
			"Máte deset různých účtů a deset různých hesel? Single sign on je u nás samozřejmostí.",
		svgDraw:
			"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
	},
	{
		term: "Vytváření události",
		description:
			"Klikni, pak ještě jednou a událost je hotová. Jednoduché uživatelské prostředí je samozřejmostí.",
		svgDraw: "M13 10V3L4 14h7v7l9-11h-7z",
	},
	{
		term: "Možnost zasílat notifikací vašim zákazníkům",
		description:
			"Máte nenaplněnou sportovní lekci? Lákavou nabídku pro zákazníky? Nového trenéra, o kterém musí vědět svět? Zašlete notifikaci!",
		svgDraw:
			"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
	},
];

export default function Partner() {
	return (
		<StaticSite>
			<section className="relative bg-white overflow-hidden">
				<div className="max-w-7xl lg:w-1/2">
					<div className="relative z-10 py-8 lg:bg-white sm:py-16 md:py-20 lg:max-w-2xl lg:w-full lg:py-28 xl:py-32 ml-auto">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
							<div className="text-left">
								<H1>
									<span className="block">Staňte se naším</span>
									<span className="block text-main-800">Partnerem</span>
								</H1>
								<MainDescription>
									Se sportovišti komunikujeme jako s našimi rovnocennými partnery. Vaši zpětnou
									vazbu bereme vážně a všechny vstupy sportovišť pečlivě zvažujeme.
								</MainDescription>
								<div className="mt-5 sm:mt-8 flex flex-wrap gap-3 justify-start">
									<ButtonLink href="/registrace?formType=place" variant="big" isOutline={false}>
										Staňte se partnerem
									</ButtonLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute inset-y-0 w-screen lg:right-0 lg:w-1/2">
					<img
						className="w-full h-full object-cover blur-sm lg:blur-0"
						src="https://source.unsplash.com/random/?partner"
						alt="Partner"
					/>
					<div
						className="lg:hidden absolute bg-black bg-opacity-60 inset-0"
						aria-hidden="true"
					></div>
				</div>
			</section>

			<section className="py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<H2 variant="small">Benefity</H2>
						<H2 variant="base">Co vám přinese partnerství</H2>
						<MainDescription>
							Staňte se součástí největší platformy spojující sportoviště a sportovce!
						</MainDescription>
					</div>
					<DescriptionList list={descriptionList} />
				</div>
			</section>
			<section className="relative">
				<div className="flex flex-col mx-auto lg:flex-row">
					<div className="relative px-4 mx-auto py-12 lg:py-16 lg:max-w-7xl lg:pl-6 lg:mr-auto">
						<div className="text-base max-w-prose mx-auto lg:max-w-lg lg:mr-0">
							<HeadingWrapper>
								<H2 variant="base">Jak pracujeme</H2>
							</HeadingWrapper>
							<SmallDescription>
								<p>
									Se sportovišti komunikujeme jako s našimi rovnocennými partnery. Vaši zpětnou
									vazbu bereme vážně a všechny vstupy sportovišť pečlivě zvažujeme.
								</p>
								<h3>Jak vypadá spolupráce</h3>
								<p>Postup domluvení spolupráce se sportovištěm je intutivní a jednoduchý.</p>
								<ul>
									<li>První schůzka</li> <li>Podpis smlouvy</li>
									<li>Registrace do platformy</li>
								</ul>
							</SmallDescription>
						</div>
					</div>
					<div className="lg:w-1/2 lg:h-auto flex items-center justify-center">
						<img
							className="h-56 w-full object-cover lg:h-full shadow-md"
							src="https://source.unsplash.com/random/?garden"
							alt=""
							loading="lazy"
						/>
					</div>
				</div>
			</section>
			<sectio>
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<BigCardWithImage
						imageSrc="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
						imageAlt="App screenshot"
					>
						<H2 variant="base">
							<p className="block text-white">
								Jednoduchá <br />
								administrátorská <br />
								konzole.
							</p>
						</H2>
						<p className="my-4 text-lg leading-6 text-main-200">
							Hned po registraci získáte přístup do administrátorské konzole! Intuitivní a krásné.
						</p>
						<div className="md:max-w-xs">
							<ButtonLink variant="base" outline={true} href="#">
								Live demo
							</ButtonLink>
						</div>
					</BigCardWithImage>
				</div>
			</sectio>
			<ContactFooter />
		</StaticSite>
	);
}
