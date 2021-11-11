import { H3, H2, H1, HeadingWrapper, SmallDescription, MainDescription } from "@src/atoms";
import { StaticSite } from "@src/templates";
import { ReferenceCard, TeamMemberCard, ReferenceSection } from "@src/molecules";

import hooli from "@assets/img/hooli-brands.svg";

const teamMembers = [
	{
		name: "Leonard Krasner",
		position: "Senior Designer",
		imageSrc: "https://source.unsplash.com/random/?male,face",
		linkedInUrl: "#",
		twitterUrl: "#",
	},
	{
		name: "Leonard Krasner",
		position: "Senior Designer",
		imageSrc: "https://source.unsplash.com/random/?male,face",
		linkedInUrl: "#",
		twitterUrl: "#",
	},
	{
		name: "Leonard Krasner",
		position: "Senior Designer",
		imageSrc: "https://source.unsplash.com/random/?male,face",
		linkedInUrl: "#",
		twitterUrl: "#",
	},
	{
		name: "Leonard Krasner",
		position: "Senior Designer",
		imageSrc: "https://source.unsplash.com/random/?male,face",
		linkedInUrl: "#",
		twitterUrl: "#",
	},
	{
		name: "Leonard Krasner",
		position: "Senior Designer",
		imageSrc: "https://source.unsplash.com/random/?male,face",
		linkedInUrl: "#",
		twitterUrl: "#",
	},
	{
		name: "Leonard Krasner",
		position: "Senior Designer",
		imageSrc: "https://source.unsplash.com/random/?male,face",
		linkedInUrl: "#",
		twitterUrl: "#",
	},
];

export default function About() {
	return (
		<StaticSite>
			{/* HERO */}
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<H1>O Nás</H1>
						<MainDescription>
							Tvoříme most mezi <span className="text-main-600">sportovišti</span> a
							<span className="text-main-600"> sportovci</span>
						</MainDescription>
					</div>
				</div>
			</div>
			{/* "V čem jsme jiní" section */}
			<section className="py-16 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
					<HeadingWrapper>
						<H2 variant="small">Mise</H2>
						<H3 variant="big">V čem jsme jiní</H3>
					</HeadingWrapper>

					<SmallDescription>
						<div className="lg:max-w-5xl lg:pr-72">
							<p className="text-lg text-gray-500 ">
								Naším posláním je vytvářet svět pro sportovce, kde každý najde své sportovní vyžití.
							</p>
						</div>
					</SmallDescription>
					<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
						<div className="relative z-10">
							<SmallDescription>
								<p>Misi naplňujeme následujícími body:</p>
								<ul>
									<li>Vytváříme jedinečnou platformu pro sportovce</li>
									<li>Nebojíme se sportovních výzev</li>
									<li>Sami sportujeme a víme, co sportovci potřebují</li>
								</ul>
								<p>
									Nic nás neodradí od našeho cíle. Jsme Fit. Jsme Me. Jsme Fit.Me. Ambice naší
									platformy jsou nemalé. Do roku 2023 expandujeme na zahraniční trhy.{" "}
								</p>
								<h3>Jsme tu pro vás</h3>
								<p>
									Ve Fit.Me naleznete spolehlivého partnera na vaší sportovní cestě. S jakýkmkoliv
									problémem se můžete obrátit na 24/7 prémiovou podporu.{" "}
								</p>
							</SmallDescription>
						</div>
						<ReferenceCard
							companyName="Lezecké cetrum SmíchOff"
							companyLogoSrc={hooli.src}
							refereeName="John Doe"
							refereeImgSrc="https://source.unsplash.com/random/48x48/?male,face"
							refereePosition="CEO"
						>
							Fit.Me nám vyšlo vstříc ve všem. Od přátelského přijetí na platformu až po propagaci
							lezeckého centra novým sportovcům. Bez Fit.Me bychom post-covidovou dobu nezvládli.
							Děkujeme!
						</ReferenceCard>
					</div>
				</div>
			</section>
			{/* CTA: "Posuňte svůj workout na novou úroveň" */}

			{/* "Náš přístup" section */}
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<H2 variant="small">Spolupráce</H2>
						<H2 variant="base">Náš přístup</H2>
						<MainDescription>
							Začněte zdarma, postupně vyplňte váš profil a zveřejněte ho. Poté lze dále zkoušet a
							zavádět další funkce.
						</MainDescription>
					</div>
				</div>
			</div>

			{/* "Náš tým" section */}
			<section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<HeadingWrapper centered>
						<H2 variant="small">tým</H2>
						<H3 variant="base">Náš tým</H3>
					</HeadingWrapper>
					<ul className="space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 sm:gap-6 lg:gap-8">
						{teamMembers.map((teamMember, index) => (
							<TeamMemberCard
								key={index}
								name={teamMember.name}
								position={teamMember.position}
								imageSrc={teamMember.imageSrc}
								linkedInUrl={teamMember.linkedInUrl}
								twitterUrl={teamMember.twitterUrl}
							/>
						))}
					</ul>
				</div>
			</section>

			{/* "Píší o nás" section */}
			<section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
				<ReferenceSection
					companyLogoSrc={hooli.src}
					refereeName="Jan Vítů"
					refereeImgSrc="https://source.unsplash.com/random/48x48/?male,face"
					refereePosition="Someone"
					companyName="Fit.Me"
				>
					<div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
						<p>
							&ldquo;Fit.Me má vizi. Je to jedinečná firma na trhu, jedinečná platforma, kterou
							jinde nenajdete.&rdquo;
						</p>
					</div>
				</ReferenceSection>
			</section>
		</StaticSite>
	);
}
