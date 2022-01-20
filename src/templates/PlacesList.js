import { PlaceCard } from "@src/organisms";

export function PlacesList({ places, filters }) {
	const finalizePlaces = (filters) => {
		let arrOfPlaces = places;
		if (filters.tags.length && Array.isArray(filters.tags)) {
			arrOfPlaces = arrOfPlaces.filter((place) => {
				let condition = true;
				filters.tags.forEach((tag) => {
					let contains = (element) => element.name === tag;
					if (!place.tags.some(contains)) condition = false;
				});
				return condition;
			});
		}

		let y = [...arrOfPlaces];
		if (!filters.order) {
			return y;
		} else if (filters.order === "ASC") {
			return y.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
		} else if (filters.order === "DESC") {
			return y.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
		} else return arrOfPlaces;
	};

	// placesReadyToRender(actualPlaces, filters);

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{/* {placesReadyToRender(actualPlaces, filters).map((place) => { */}
			{finalizePlaces(filters).map((place) => {
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
