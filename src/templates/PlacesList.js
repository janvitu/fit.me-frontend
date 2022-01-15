import { PlaceCard } from "@src/organisms";

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
		return reorderPlaces(arrOfPlaces, filters.order);
	};

	const reorderPlaces = (places, order) => {
		if (order === "") {
			return places;
		} else if (order === "ASC") {
			return places.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
		} else if (order === "DESC") {
			return places.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
		}
	};

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{placesReadyToRender(places, filters).map((place) => {
				return (
					<PlaceCard
						name={place.name}
						username={place.username}
						description={place.intro_text}
						tags={place.tags}
						img={place.profile_photo}
						rating={place.rating}
						key={place.id}
					/>
				);
			})}
		</div>
	);
}
