import { TrainerCard } from "@src/molecules";
import hooliIcon from "@assets/img/hooli-brands.svg";

export function TrainersList({ trainers, filters }) {
	const trainersReadyToRender = (trainers, filters) => {
		let arrOfTrainers = trainers;
		if (filters.tags.length && Array.isArray(filters.tags)) {
			arrOfTrainers = trainers.filter((trainer) => {
				let condition = true;
				filters.tags.forEach((tag) => {
					const contains = (element) => element.name === tag;
					if (!trainer.tags.some(contains)) condition = false;
				});
				return condition;
			});
		}
		console.log(reorderPlaces(arrOfTrainers, filters.order));
		return reorderPlaces(arrOfTrainers, filters.order);
	};

	const reorderPlaces = (trainers, order) => {
		if (order === "") {
			return trainers;
		} else if (order === "ASC") {
			return trainers.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
		} else if (order === "DESC") {
			return trainers.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
		}
	};

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{trainersReadyToRender(trainers, filters).map((trainer) => {
				return (
					<TrainerCard
						name={trainer.name}
						username={trainer.username}
						description={trainer.description}
						tags={trainer.tags}
						img={trainer.img}
						rating={trainer.rating}
						key={trainer.id}
					/>
				);
			})}
		</div>
	);
}

TrainersList.defaultProps = {
	trainers: [
		{
			id: 1,
			name: "Robert Chott",
			username: "robertchott",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
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
			username: "robertchott",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
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
			username: "robertchott",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
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
			username: "robertchott",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
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
		{
			id: 5,
			name: "Robert Chott",
			username: "robertchott",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
			tags: [
				{
					name: "Fyzioterapie",
					color: "yellow",
				},
			],
			rating: 4,
		},
		{
			id: 6,
			name: "Robert Chott",
			username: "robertchott",
			img: {
				src: hooliIcon.src,
				alt: "Ikona sportoviště",
			},
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
			rating: 2,
		},
	],
};
