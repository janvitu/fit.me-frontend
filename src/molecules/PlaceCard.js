import { useState } from "react";
import { Tag } from "@src/atoms";
import { RatingIndicator } from "@src/molecules";
import hooliIcon from "@assets/img/hooli-brands.svg";
import Link from "next/link";
import Image from "next/image";

export function PlaceCard({ name, username, description, tags, img, rating }) {
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
							<div className="flex items-center space-x-3 gap-2 py-2 sm">
								<h3 className="text-gray-900 text-sm font-medium">{name}</h3>
								<RatingIndicator ratingValue={rating} />
							</div>

							<div>
								<div className="flex items-center flex-wrap gap-x-1 gap-y-1">
									{toggledTags(tagsToggled).map((tag, index) => (
										<Tag name={tag.name} color={tag.color} key={index} />
									))}
									{tags.length <= 3 ? (
										""
									) : (
										<button
											type="button"
											className=" relative flex-shrink-0 text-xs  mr-1 px-2 py-0.5 rounded-t-sm bg-gray-100 text-gray-800  hover:bg-main-200"
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
						<Image
							className="bg-gray-300 rounded-full flex-shrink-0"
							width="40"
							height="40"
							src={img}
							alt="alt"
						/>
					</div>
				</a>
			</Link>
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
	img: hooliIcon.src,
};
