import { EventCard } from "@src/organisms";
import hooliIcon from "@assets/img/hooli-brands.svg";

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
			{eventsReadyToRender(events, filters).map((event, index) => {
				return (
					<EventCard
						key={index}
						name={event.name}
						rating={event.rating}
						date={event.date}
						tags={event.tags}
						numOfRegistered={event.numOfRegistered}
					/>
				);
			})}
		</div>
	);
}

EventsList.defaultProps = {
	events: [
		{
			id: 1,
			name: "Super Trénink",
			rating: 4.4,
			date: "23.03.2022",
			time: "15:00 - 16:30",
			numOfRegistered: 13,
			tags: [
				{
					name: "Powerlifting",
					color: "red",
				},
			],
			img: {
				src: hooliIcon.src,
				alt: "",
			},
		},
		{
			id: 2,
			name: "Jump trénink",
			rating: 4.0,
			date: "24.03.2022",
			time: "15:00 - 16:30",
			numOfRegistered: 16,
			tags: [
				{
					name: "Yoga",
					color: "lime",
				},
			],
			img: {
				src: hooliIcon.src,
				alt: "",
			},
		},
		{
			id: 3,
			name: "Beďas",
			rating: 3.2,
			date: "27.05.2022",
			time: "16:00 - 16:30",
			numOfRegistered: 5,
			tags: [
				{
					name: "Badminton",
					color: "green",
				},
			],
			img: {
				src: hooliIcon.src,
				alt: "",
			},
		},
		{
			id: 4,
			name: "Tennis zápas",
			rating: 4.9,
			date: "29.03.2022",
			time: "15:00 - 17:30",
			numOfRegistered: 10,
			tags: [
				{
					name: "Tennis",
					color: "yellow",
				},
			],
			img: {
				src: hooliIcon.src,
				alt: "",
			},
		},
		{
			id: 5,
			name: "Poť krev",
			rating: 2.1,
			date: "02.03.2022",
			time: "14:00 - 16:30",
			numOfRegistered: 19,
			tags: [
				{
					name: "FitBox",
					color: "pink",
				},
			],
			img: {
				src: hooliIcon.src,
				alt: "",
			},
		},
	],
};
