import { PlaceCard } from "@src/molecules";
import hooliIcon from "@assets/img/hooli-brands.svg";

export function PlacesList({ places, filters }) {
	const placesReadyToRender = (places, filters) => {
		let arrOfPlaces = places;
		if (filters.tags.length && Array.isArray(filters.tags)) {
			arrOfPlaces = places.filter((place) => {
				let condition = true;
				filters.tags.forEach((tag) => {
					const contains = (element) => element.name === tag;
					if (!place.tags.some(contains)) condition = false;
				});
				return condition;
			});
		}
		return arrOfPlaces;
	};

	//TODO ordering places by selected field ASC/DESC
	const reorderPlaces = (places, order) => {};

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{placesReadyToRender(places, filters).map((place) => {
				return (
					<PlaceCard
						name={place.name}
						username={place.username}
						description={place.description}
						tags={place.tags}
						img={place.img}
						key={place.id}
					/>
				);
			})}
		</div>
	);
}

PlacesList.defaultProps = {
	places: [
		{
			id: 1,
			name: "XFitness",
			username: "xfitness",
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
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 2,
			name: "XFitness",
			username: "xfitness",
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
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 3,
			name: "XFitness",
			username: "xfitness",
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
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 4,
			name: "XFitness",
			username: "xfitness",
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
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 5,
			name: "XFitness",
			username: "xfitness",
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
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 6,
			name: "XFitness",
			username: "xfitness",
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
					name: "FitBox",
					color: "pink",
				},
			],
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 7,
			name: "XFitness",
			username: "xfitness",
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
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
	],
};
