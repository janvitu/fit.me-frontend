import { ButtonCard, Tag } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";

export function TrainerCard({ name, description, tags, img }) {
	return (
		<div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
			<div className="flex-1 flex flex-col p-8">
				<img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={img.src} alt={img.alt} />
				<h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>
				<dl className="mt-1 flex-grow flex flex-col justify-between">
					<dt className="sr-only">Description</dt>
					<dd className="text-gray-500 text-sm">{description}</dd>
					<dt className="sr-only">Specializations</dt>
					<dd className="mt-3 space-x-1">
						{tags.map((tag) => (
							<Tag name={tag} />
						))}
					</dd>
				</dl>
			</div>
			<div>
				<div className="-mt-px flex divide-x divide-gray-200">
					<ButtonCard type="email" text="Email" />
					<ButtonCard type="chat" text="Chat" />
				</div>
			</div>
		</div>
	);
}

TrainerCard.defaultProps = {
	name: "Robert Chott",
	description: "Fyzio Terapeut a Zen Master",
	tags: ["Fyzioerapie", "Zen Mistr", "Mist Chi"],
	img: {
		src: hooliIcon.src,
		alt: "",
	},
};
