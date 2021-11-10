import { PlaceCard } from "@src/molecules";

export function PlacesList({ places }) {
	console.log("---PlacesList:", places);
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{places.map((place) => {
				return (
					<PlaceCard
						name={place.name}
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
		},
		{
			id: 2,
			name: "XFitness",
		},
		{
			id: 3,
			name: "XFitness",
		},
		{
			id: 4,
			name: "XFitness",
		},
		{
			id: 5,
			name: "XFitness",
		},
		{
			id: 6,
			name: "XFitness",
		},
	],
};
