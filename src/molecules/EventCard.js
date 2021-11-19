import { useState } from "react";
import { Tag } from "@src/atoms";
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
		<div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
			<Link href={`/sportoviste/${id}`} passHref>
				<a>
					<div className="w-full flex items-center justify-between p-6 space-x-6">
						<div className="px-4 mt-5 sm:mt-8">
							<img
								src={img.src}
								alt="Event Image"
								className="object-cover mx-auto md:h-40 md:w-40 h-20 w-20"
							/>
						</div>
						<div className="flex-1 truncate">
							<div className="flex flex-col sm:flex-row text-gray-500">
								<div className="font-bold text-sm">{date} </div>
								<div className="font-bold text-sm hidden sm:block">&nbsp;|&nbsp;</div>
								<div className="text-sm font-normal">{time}</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="mr-4 mb-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3x">
									{name}
								</div>
								{rating && (
									<div className="flex gap-2 mb-4">
										<RatingIndicator ratingValue={rating} className="mt-2" />
										<span className="text-xs text-gray-500 mt-1">({rating})</span>
									</div>
								)}{" "}
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
							<div className="text-xs text-yellow-500"> Více > </div>
						</div>
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
