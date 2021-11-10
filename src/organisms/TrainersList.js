import { TrainerCard } from "@src/molecules";
import hooliIcon from "@assets/img/hooli-brands.svg";

export function TrainersList({ trainers }) {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{trainers.map((trainer) => {
				return (
					<TrainerCard
						name={trainer.name}
						description={trainer.description}
						tags={trainer.tags}
						img={trainer.img}
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
		},
		{
			id: 2,
			name: "Robert Chott",
		},
		{
			id: 3,
			name: "Robert Chott",
		},
		{
			id: 4,
			name: "Robert Chott",
		},
		{
			id: 5,
			name: "Robert Chott",
		},
		{
			id: 6,
			name: "Robert Chott",
		},
	],
};
