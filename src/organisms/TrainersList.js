import { TrainerCard } from "@src/molecules";
import hooliIcon from "@assets/img/hooli-brands.svg";

export function TrainersList({ trainers, filters }) {
	const trainersReadyToRender = (trainers, filters) => {
		let arrOfTrainers = trainers;
		if (filters.tags.length && Array.isArray(filters.tags)) {
			arrOfTrainers = trainers.filter((trainer) => {
				let condition = true;
				filters.specializations.forEach((tag) => {
					const contains = (element) => element.name === tag;
					if (!trainer.specializations.some(contains)) condition = false;
				});
				return condition;
			});
		}
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
						name={`${trainer.name} ${trainer.surname}`}
						username={trainer.username}
						description={trainer.intro_text}
						tags={trainer.specializations}
						img={trainer.profile_photo}
						rating={trainer.rating}
						key={trainer.id}
					/>
				);
			})}
		</div>
	);
}
