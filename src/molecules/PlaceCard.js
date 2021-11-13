import { useState } from "react";
import { Tag } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";
import Link from "next/link";

export function PlaceCard({ name, username, description, tags, img }) {
	const [tagsToggled, setTagsToggled] = useState(false);
	const toggledTags = (tagsToggled) => {
		var shortenedTags = [];
		if (!tagsToggled) {
			for (let i = 0; i <= 2; i++) {
				if (!tags[i]) continue;
				else shortenedTags.push(tags[i]);
			}
			return shortenedTags;
		} else return tags;
	};

	return (
		<div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
			<Link href={`/sportoviste/${username}`} passHref>
				<a>
					<div className="w-full flex items-center justify-between p-6 space-x-6">
						<div className="flex-1 truncate">
							<div className="flex items-center space-x-3 sm">
								<h3 className="text-gray-900 text-sm font-medium">{name}</h3>
							</div>
							<div>
								<div className="flex items-center flex-wrap gap-x-2 gap-y-1">
									{toggledTags(tagsToggled).map((tag, index) => (
										<Tag name={tag.name} color={tag.color} key={index} />
									))}
									{tags.length <= 3 ? (
										""
									) : (
										<button
											type="button"
											className=" relative flex-shrink-0 text-xs z-20 px-2 py-0.5 rounded-t-sm bg-gray-100 text-gray-800  hover:bg-main-200"
											onClick={(e) => {
												e.preventDefault();
												setTagsToggled(!tagsToggled);
											}}
										>
											{!tagsToggled ? "Show more" : "Hide"}
										</button>
									)}
								</div>
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
			{/* <div> */}
			{/* <div className="-mt-px flex divide-x divide-gray-200">
					<ButtonCard text="Email" img={emailIcon} />
					<ButtonCard text="Chat" img={messageIcon} />
				</div> */}
			{/* </div> */}
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
			color: "red",
		},
		{
			name: "Yoga",
			color: "lime",
		},
		{
			name: "Badminton",
			color: "green",
		},
		{
			name: "Tennis",
			color: "yellow",
		},
		{
			name: "Squash",
			color: "purple",
		},
		{
			name: "FitBox",
			color: "pink",
		},
	],
	img: {
		src: hooliIcon.src,
		alt: "",
	},
};
