import Image from "next/image";
import { H3, H4, HeadingWrapper, XlWrapper, DelimiterWide, ProfileImage } from "@src/atoms";
import { ProfileCard, TrainerCard } from "@src/molecules";
import { PlaceCard } from "@src/organisms";

export function UserProfileTemplate({ profileImg, userData }) {
	function FavouritesPlaces({ userData }) {
		return (
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{userData.favourites.places.map((favouritPlace) => {
					return (
						<PlaceCard
							key={favouritPlace.id}
							name={favouritPlace.name}
							description={favouritPlace.description}
							tags={favouritPlace.tags}
							img={favouritPlace.img}
							rating={favouritPlace.rating}
						/>
					);
				})}
			</div>
		);
	}
	function FavouritesTrainers({ userData }) {
		return (
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{userData.favourites.trainers.map((favouritTrainer) => {
					return (
						<TrainerCard
							key={favouritTrainer.id}
							name={favouritTrainer.name}
							description={favouritTrainer.description}
							tags={favouritTrainer.tags}
							img={favouritTrainer.img}
							rating={favouritTrainer.rating}
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
						<ProfileImage img={{ src: profileImg, alt: "alt" }} variant="large" />
					</div>
					<div className="mt-8 pl-4 pr-4 md:pr-8 mx-auto flex-1">
						<ProfileCard />
					</div>
				</div>
			</XlWrapper>
			<XlWrapper>
				<div className="max-w-screen-xl mx-auto md:mt-36 mt-8 gap-8">
					<div className="space-y-7">
						<HeadingWrapper>
							<div className="mt-10 text-center md:text-left">
								<H3 variant="base">Oblíbené</H3>

								<H4>Cvičiště</H4>
							</div>
						</HeadingWrapper>

						<FavouritesPlaces userData={userData} />

						<DelimiterWide />
						<div className="mt-10 text-center md:text-left">
							<H4>Trenéři</H4>
						</div>
						<FavouritesTrainers userData={userData} />
					</div>
				</div>
			</XlWrapper>
		</>
	);
}

UserProfileTemplate.defaultProps = {
	profileImg: "https://source.unsplash.com/random",
	userData: {
		favourites: {
			places: [
				{
					id: 1,
					name: "XFitness",
					description: "xfitness",
					tags: [
						{
							name: "Powerlifting",
							color: "red",
						},
						{
							name: "Yoga",
							color: "lime",
						},
						{
							name: "Badminton",
							color: "green",
						},
					],
					img: "https://source.unsplash.com/random/?PERSON",
					rating: 5,
				},
				{
					id: 2,
					name: "XFitness",
					description: "xfitness",
					tags: [
						{
							name: "Powerlifting",
							color: "red",
						},
						{
							name: "Yoga",
							color: "lime",
						},
						{
							name: "Badminton",
							color: "green",
						},
						{
							name: "Tennis",
							color: "yellow",
						},
						{
							name: "Squash",
							color: "purple",
						},
						{
							name: "FitBox",
							color: "pink",
						},
					],
					img: "https://source.unsplash.com/random/?PERSON",
					rating: 4,
				},
				{
					id: 3,
					name: "XFitness",
					description: "xfitness",
					tags: [
						{
							name: "Badminton",
							color: "green",
						},
						{
							name: "Tennis",
							color: "yellow",
						},
						{
							name: "Squash",
							color: "purple",
						},
						{
							name: "FitBox",
							color: "pink",
						},
					],
					img: "https://source.unsplash.com/random/?PERSON",
					rating: 2,
				},
				{
					id: 4,
					name: "XFitness",
					description: "xfitness",
					tags: [
						{
							name: "Powerlifting",
							color: "red",
						},
						{
							name: "Yoga",
							color: "lime",
						},
						{
							name: "Badminton",
							color: "green",
						},
						{
							name: "Tennis",
							color: "yellow",
						},
						{
							name: "Squash",
							color: "purple",
						},
						{
							name: "FitBox",
							color: "pink",
						},
					],
					img: "https://source.unsplash.com/random/?PERSON",
					rating: 4,
				},
			],
			trainers: [
				{
					id: 1,
					name: "Robert Chott",
					Description: "Prostě fizio",
					img: "https://source.unsplash.com/random/?PERSON",
					tags: [
						{
							name: "Fyzioterapie",
							color: "yellow",
						},
						{
							name: "Mistr chi",
							color: "green",
						},
						{
							name: "Zen master",
							color: "lime",
						},
					],
					rating: 1,
				},
				{
					id: 2,
					name: "Robert Chott",
					Description: "Prostě fizio",
					img: "https://source.unsplash.com/random/?PERSON",
					tags: [
						{
							name: "Zen master",
							color: "lime",
						},
					],
					rating: 5,
				},
				{
					id: 3,
					name: "Robert Chott",
					Description: "Prostě fizio",
					img: "https://source.unsplash.com/random/?PERSON",
					tags: [
						{
							name: "Mistr chi",
							color: "green",
						},
					],
					rating: 5,
				},
				{
					id: 4,
					name: "Robert Chott",
					Description: "Prostě fizio",
					img: "https://source.unsplash.com/random/?PERSON",
					tags: [
						{
							name: "Mistr chi",
							color: "green",
						},
						{
							name: "Zen master",
							color: "lime",
						},
					],
					rating: 3,
				},
			],
		},
	},
};
