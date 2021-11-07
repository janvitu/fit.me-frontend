import { H3, XlWrapper, DelimiterWide } from "@src/atoms";
import { ProfileCard, PlaceCard, TrainerCard } from "@src/molecules";
import { DynamicSite, StaticSite } from "@src/templates/DynamicSite";

export default function Profile() {
	return (
		<DynamicSite>
			<XlWrapper>
				<div className="md:flex">
					<div className="px-4 md:ml-8 md:mr-12 mt-5 sm:mt-8">
						<img
							className="object-cover mx-auto h-40 w-40 rounded-full md:w-56 md:h-56"
							src="https://source.unsplash.com/random/?male,face"
							alt="Sportovec"
						/>
					</div>
					<div className="mt-8 pr-8 mx-auto flex-1">
						<ProfileCard />
					</div>
				</div>
			</XlWrapper>
			<div className="lg:grid max-w-screen-xl mx-auto lg:grid-cols-4 md:mt-36 mt-8 gap-8">
				<div className="lg:col-span-3 space-y-7">
					<div className="text-center">
						<H3 variant="base">Oblíbené</H3>
						<h4 className="text-gray-500">Cvičiště</h4>
					</div>
					<div>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:sm:grid-cols-3">
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
						</div>
					</div>
					<DelimiterWide />
					<div className="mt-10 text-center">
						<h4 className="text-gray-500">Trenéři</h4>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<TrainerCard />
						<TrainerCard />
						<TrainerCard />
					</div>
				</div>
				<div className="sm:mr-4">
					<p className="text-center">
						<H3 variant="base">Historie</H3>
					</p>
					<div className="mx-24 lg:mx-0">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
						</div>
					</div>
				</div>
			</div>
		</DynamicSite>
	);
}
