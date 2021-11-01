import { H3, H2, HeadingWrapper, SmallDescription, MainDescription } from "@components/atoms";
import { StaticSite } from "@components/templates";
import { ReferenceCard, TeamMemberCard, ReferenceSection } from "@components/molecules";

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
						<H2 variant="big">O Nás</H2>
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
								Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
								consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
								Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames
								senectus vitae.
							</p>
						</div>
					</SmallDescription>
					<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
						<div className="relative z-10">
							<SmallDescription>
								<p>
									Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem
									nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet
									quam urna.
								</p>
								<ul>
									<li>Quis elit egestas venenatis mattis dignissim.</li>
									<li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
									<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
								</ul>
								<p>
									Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
									Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum
									consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
									fermentum lacus in. Viverra.
								</p>
								<h3>We’re here to help</h3>
								<p>
									Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in
									volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.
									Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec
									ultricies non morbi. Mi a platea auctor mi.
								</p>
							</SmallDescription>
						</div>
						<ReferenceCard
							companyName="Tridora group"
							companyLogoSrc={hooli.src}
							refereeName="John Doe"
							refereeImgSrc="https://source.unsplash.com/random/48x48/?male,face"
							refereePosition="CEO"
						>
							Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in
							volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet
							sem est phasellus eu proin massa, lectus.
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
							Start building for free, then add a site plan to go live. Account plans unlock
							additional features.
						</MainDescription>
					</div>
				</div>
			</div>

			{/* "Náš tým" section */}
			<section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<HeadingWrapper centered>
						<H2 variant="small">tým</H2>
						<H3 variant="big">Náš tým</H3>
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
					companyName="Hooli"
					companyLogoSrc={hooli.src}
					refereeName="Gavin Belson"
					refereeImgSrc="https://source.unsplash.com/random/48x48/?male,face"
					refereePosition="CEO, ex"
				>
					<div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
						<p>
							&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
							culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et
							corporis.&rdquo;
						</p>
					</div>
				</ReferenceSection>
			</section>

			{/* FAQ */}
		</StaticSite>
	);
}
