import Image from "next/image";
import { H3, H4, HeadingWrapper, XlWrapper, DelimiterWide } from "@src/atoms";
import { ProfileCard, PlaceCard, TrainerCard } from "@src/molecules";

export function UserProfileTemplate({ profileImg, userData }) {
	function HistoryItemsList({ userData }) {
		return (
			<div className="mx-auto lg:mx-0">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
					{userData.history.map((historyItem) => {
						if (historyItem.type === "place") {
							return (
								<PlaceCard
									key={historyItem.id}
									name={historyItem.name}
									description={historyItem.description}
									tags={historyItem.tags}
									img={historyItem.img}
								/>
							);
						} else if (historyItem.type === "trainer") {
							return (
								<TrainerCard
									key={historyItem.id}
									name={historyItem.name}
									description={historyItem.description}
									tags={historyItem.tags}
									img={historyItem.img}
								/>
							);
						}
					})}
				</div>
			</div>
		);
	}
	function FavouritesPlaces({ userData }) {
		return (
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{userData.favourites.places.map((favouritPlace) => {
					return (
						<PlaceCard
							key={favouritPlace.id}
							name={favouritPlace.name}
							description={favouritPlace.description}
							tags={favouritPlace.tags}
							img={favouritPlace.img}
						/>
					);
				})}
			</div>
		);
	}
	function FavouritesTrainers({ userData }) {
		return (
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:sm:grid-cols-3">
				{userData.favourites.trainers.map((favouritTrainer) => {
					return (
						<TrainerCard
							key={favouritTrainer.id}
							name={favouritTrainer.name}
							description={favouritTrainer.description}
							tags={favouritTrainer.tags}
							img={favouritTrainer.img}
						/>
					);
				})}
			</div>
		);
	}
	return (
		<>
			<XlWrapper>
				<div className="md:flex">
					<div className="px-4 md:ml-8 md:mr-12 mt-5 sm:mt-8">
						<img
							src={profileImg}
							alt="Profile Image"
							width={160}
							height={160}
							className="rounded-full object-cover mx-auto h-40 w-40"
						/>
					</div>
					<div className="mt-8 pr-8 mx-auto flex-1">
						<ProfileCard />
					</div>
				</div>
			</XlWrapper>
			<div className="lg:grid max-w-screen-xl mx-auto lg:grid-cols-4 md:mt-36 mt-8 gap-8">
				<div className="lg:col-span-3 space-y-7">
					<HeadingWrapper>
						<H3 variant="base">Oblíbené</H3>
						<H4>Cvičiště</H4>
					</HeadingWrapper>

					<FavouritesPlaces userData={userData} />

					<DelimiterWide />
					<div className="mt-10 text-center">
						<H4>Trenéři</H4>
					</div>
					<FavouritesTrainers userData={userData} />
				</div>
				<div className="sm:mr-4">
					<div className="text-center">
						<H3 variant="base">Historie</H3>
					</div>
					<HistoryItemsList userData={userData} />
				</div>
			</div>
		</>
	);
}

UserProfileTemplate.defaultProps = {
	profileImg: "https://source.unsplash.com/random",
	userData: {
		history: [
			{
				id: 1,
				type: "place",
				name: "Náměstí",
				description: "Náměstí",
				tags: [{ name: "náměstí" }, { name: "náměstí" }],
				img: "https://images.unsplash.com/photo-1588790981757-b9f9f9f8b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
			},
		],
		favourites: {
			places: [
				{
					id: 1,
					name: "Náměstí",
					description: "Náměstí",
					tags: [{ name: "náměstí" }, { name: "náměstí" }],
					img: "https://images.unsplash.com/photo-1588790981757-b9f9f9f8b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				},
				{
					id: 2,
					name: "Náměstí",
					description: "Náměstí",
					tags: [{ name: "náměstí" }, { name: "náměstí" }],
					img: "https://images.unsplash.com/photo-1588790981757-b9f9f9f8b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				},
				{
					id: 3,
					name: "Náměstí",
					description: "Náměstí",
					tags: [{ name: "náměstí" }, { name: "náměstí" }],
					img: "https://images.unsplash.com/photo-1588790981757-b9f9f9f8b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				},
			],
			trainers: [
				{
					id: 1,
					name: "Robert Chott",
					Description: "Prostě fizio",
					tags: [{ name: "fizio" }, { name: "mistr zenu" }, { name: "fizioterapeut" }],
					img: "https://images.unsplash.com/photo-1588790981757-b9f9f9f8b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				},
				{
					id: 2,
					name: "Robert Chott",
					Description: "Prostě fizio",
					tags: [{ name: "fizio" }, { name: "mistr zenu" }, { name: "fizioterapeut" }],
					img: "https://images.unsplash.com/photo-1588790981757-b9f9f9f8b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				},
			],
		},
	},
};
