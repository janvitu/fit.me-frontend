import { H3, H2, H1, Label, HeadingWrapper, XlWrapper } from "@src/atoms";
import { ProfileCard, PlaceCard, TrainerCard } from "@src/molecules";
import { DynamicSite, StaticSite } from "@src/templates/DynamicSite";

export default function Profile() {
	return (
		<DynamicSite>
			<div className="md:flex md:justify-center">
				<div className="px-4 md:ml-8 md:mr-12 mt-5 sm:mt-8 md:flex md:gap-20">
					<img
						className="object-cover mx-auto h-40 w-40 rounded-full md:w-56 md:h-56"
						src="https://source.unsplash.com/random/?male,face"
						alt="Team Member"
					/>
				</div>

				<div classname="mr-48 mt-8 pr-8">
					<div className="text-center md:text-left">
						<H3 variant="base">Profil</H3>
					</div>
					<ProfileCard />
				</div>
			</div>

			<div className="lg:grid lg:grid-cols-4 md:mt-36 mt-8">
				<div className="lg:col-span-3 lg:ml-4 lg:mr-4">
					<div className="text-center">
						<H3 variant="base">Oblíbené</H3>
						<H3 variant="small">Cvičiště</H3>
					</div>
					<section className="mx-24">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:sm:grid-cols-3">
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
						</div>
					</section>

					<section className="mx-24">
						<div className="mt-10 text-center">
							<H3 variant="small">Trenéři</H3>
						</div>

						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							<TrainerCard />
							<TrainerCard />
							<TrainerCard />
						</div>
					</section>
				</div>
				<div className="sm:mr-4">
					<p className="text-center">
						<H3 variant="base">Historie</H3>
					</p>
					<section className="mx-24 lg:mx-0">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
						</div>
					</section>
				</div>
			</div>
		</DynamicSite>
	);
}
