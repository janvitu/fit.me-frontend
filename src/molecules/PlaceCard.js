import { ButtonCard, Tag } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";
import emailIcon from "@assets/img/email.svg";
import messageIcon from "@assets/img/message.svg";
import Link from "next/link";

export function PlaceCard({ name, username, description, tags, img }) {
	return (
		<div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
			<Link href={`/treneri/${username}`} passHref>
				<a>
					<div className="w-full flex items-center justify-between p-6 space-x-6">
						<div className="flex-1 truncate">
							<div className="flex items-center space-x-3 sm">
								<h3 className="text-gray-900 text-sm font-medium">{name}</h3>
								{tags.map((tag, index) => (
									<Tag name={tag.name} key={index} />
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
				</a>
			</Link>
			<div>
				<div className="-mt-px flex divide-x divide-gray-200">
					<ButtonCard text="Email" img={emailIcon} />
					<ButtonCard text="Chat" img={messageIcon} />
				</div>
			</div>
		</div>
	);
}

PlaceCard.defaultProps = {
	name: "Xfitness",
	username: "xfitness",
	description: "Vaše oblíbená posilovna",
	tags: [
		{
			name: "Powerlifting",
		},
		{
			name: "Yoga",
		},
	],
	img: {
		src: hooliIcon.src,
		alt: "",
	},
};
