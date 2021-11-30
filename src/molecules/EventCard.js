import { useState } from "react";
import { ArrowLink, Tag } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";
import Link from "next/link";
import { RatingIndicator } from "@src/molecules";

export function EventCard({ id, date, time, name, rating, numOfRegistered, tags, img }) {
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
		<div className="bg-white rounded-lg shadow overflow-hidden">
			<Link href={`/sportoviste/${id}`} passHref>
				<a>
					<div className="relative flex gap-4">
						<div className="min-w-[30%] bg-gray-600">
							<img src={img.src} alt="Event Image" className="object-cover w-full h-full" />
						</div>
						<div className="flex-1 py-6 pr-6">
							<div className="flex flex-col sm:flex-row text-gray-500">
								<div className="font-bold text-xs">{date}</div>
								<div className="font-bold text-xs hidden sm:block">&nbsp;|&nbsp;</div>
								<div className="text-xs font-normal">{time}</div>
							</div>
							<div className="flex flex-col sm:flex-row flex-wrap mb-4">
								<div className="mr-4 text-md leading-8 font-bold tracking-tight text-gray-900 sm:text-lg">
									{name}
								</div>
								{rating && <RatingIndicator ratingValue={rating} />}
							</div>
							<div>
								<div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-2">
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
							<div className="text-gray-500 text-xs mb-2">Přihlášených: {numOfRegistered}</div>
							<ArrowLink href={`/sportoviste/${id}`}>Více</ArrowLink>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}

EventCard.defaultProps = {
	name: "Xfitnessss",
	rating: 2,
	date: "26.02.2009",
	time: "15:00 - 16:30",
	numOfRegistered: 16,
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
