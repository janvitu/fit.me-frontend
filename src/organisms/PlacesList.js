import { PlaceCard } from "@src/molecules";
import hooliIcon from "@assets/img/hooli-brands.svg";

export function PlacesList({ places }) {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{places.map((place) => {
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
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 2,
			name: "XFitness",
			username: "xfitness",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 3,
			name: "XFitness",
			username: "xfitness",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 4,
			name: "XFitness",
			username: "xfitness",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 5,
			name: "XFitness",
			username: "xfitness",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
		{
			id: 6,
			name: "XFitness",
			username: "xfitness",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
		},
	],
};
