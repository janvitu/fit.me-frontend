import { EventCard } from "@src/organisms";

export function EventsList({ events, filters }) {
	const eventsReadyToRender = (events, filters) => {
		let arrOfEvents = events;
		if (filters.tags.length && Array.isArray(filters.tags)) {
			arrOfEvents = events.filter((event) => {
				let condition = true;
				filters.tags.forEach((tag) => {
					const contains = (element) => element.name === tag;
					if (!event.tags.some(contains)) condition = false;
				});
				return condition;
			});
		}
		return reorderEvents(arrOfEvents, filters.order);
	};

	const reorderEvents = (events, order) => {
		if (order === "") {
			return events;
		} else if (order === "ASC") {
			return events.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
		} else if (order === "DESC") {
			return events.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
		}
	};

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{eventsReadyToRender(events, filters).map((event) => {
				return (
					<EventCard
						key={event.id}
						id={event.id}
						name={event.name}
						description={event.description}
						datetime_from={event.datetime_from}
						datetime_to={event.datetime_to}
						difficulty={event.difficulty}
						sportsground={event.sportsground}
						tags={event.tags}
						exercises={event.exercises}
						sportsmans={event.sportsmans}
						numOfRegistered={event.numOfRegistered}
					/>
				);
			})}
		</div>
	);
}
