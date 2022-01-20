import { TrainerCard } from "@src/molecules";

export function TrainersList({ trainers, filters }) {
	const finalizePlaces = (filters) => {
		let arrOfTrainers = trainers;
		let y = [...arrOfTrainers];
		if (!filters.order) {
			return y;
		} else if (filters.order === "ASC") {
			return y.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
		} else if (filters.order === "DESC") {
			return y.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
		} else return arrOfTrainers;
	};

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{finalizePlaces(filters).map((trainer) => {
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
