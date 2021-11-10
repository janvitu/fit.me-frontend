import { ButtonCard, Tag } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";

export function PlaceCard({ name, description, tags, img }) {
	console.log("---PlaceCard", PlaceCard.defaultProps);
	return (
		<div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
			<div className="w-full flex items-center justify-between p-6 space-x-6">
				<div className="flex-1 truncate">
					<div className="flex items-center space-x-3 sm">
						<h3 className="text-gray-900 text-sm font-medium">{name}</h3>
						{tags.map((tag) => (
							<Tag name={tag.name} key={tag.id} />
						))}
					</div>
					<p className="mt-1 text-gray-500 text-sm truncate">{description}</p>
				</div>
				<img
					className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
					src={img.src}
					alt={img.alt}
				/>
			</div>
			<div>
				<div className="-mt-px flex divide-x divide-gray-200">
					<ButtonCard type="email" />
					<ButtonCard type="chat" />
				</div>
			</div>
		</div>
	);
}

PlaceCard.defaultProps = {
	name: "Xfitness",
	description: "Vaše oblíbená posilovna",
	tags: [
		{
			id: 1,
			name: "Powerlifting",
		},
		{
			id: 2,
			ame: "Yoga",
		},
	],
	img: {
		src: hooliIcon.src,
		alt: "",
	},
};
