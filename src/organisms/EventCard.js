import { useState } from "react";
import { ArrowLink, Tag } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";
import Link from "next/link";
import { ModalEvent, RatingIndicator, Modal } from "@src/molecules";

export function EventCard({
	id,
	date,
	time,
	name,
	rating,
	numOfRegistered,
	tags,
	img,
	organizer,
	difficulty,
	modal = false,
}) {
	const [isOpen, setIsOpen] = useState(false);
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
		<div className="relative bg-white rounded-lg shadow divide-y divide-gray-200">
			{/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}> */}
			{modal && (
				<>
					<div
						className="absolute w-full h-full hover:cursor-pointer z-10"
						onClick={() => setIsOpen(true)}
					></div>

					<ModalEvent
						isOpen={isOpen}
						onClose={() => setIsOpen(false)}
						id={id}
						organizer={organizer}
						date={date}
						time={time}
						name={name}
						rating={rating}
						numOfRegistered={numOfRegistered}
						tags={tags}
						img={img}
						difficulty={difficulty}
					/>
				</>
			)}
			{/* </Modal> */}
			<Link href={`/lekce/${id}`} passHref>
				<a>
					<div className="w-full flex items-center gap-6 p-6">
						<div className="h-full">
							<img
								src={img.src}
								alt="Event Image"
								className="mx-auto md:h-full md:w-30 h-full w-20"
							/>
						</div>
						<div className="flex-1">
							<div className="flex flex-col sm:flex-row text-gray-500">
								<div className="font-bold text-sm">{date} </div>
								<div className="font-bold text-sm hidden sm:block">&nbsp;|&nbsp;</div>
								<div className="text-sm font-normal">{time}</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="mr-4 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3x">
									{name}
								</div>
							</div>
							{rating && (
								<div className="flex gap-2 mb-4">
									<RatingIndicator ratingValue={rating} className="mt-2" />
									<span className="text-xs text-gray-500 mt-1">({rating})</span>
								</div>
							)}
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
											className=" relative flex-shrink-0 text-xs px-2 py-0.5 rounded-t-sm bg-gray-100 text-gray-800  hover:bg-main-200"
											onClick={(e) => {
												e.preventDefault();
												setTagsToggled(!tagsToggled);
											}}
										>
											{!tagsToggled ? "Zobrazit více" : "Skrýt"}
										</button>
									)}
								</div>
							</div>
							<div className="text-gray-500 text-xs mb-2">Přihlášených: {numOfRegistered}</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}

EventCard.defaultProps = {
	id: "1",
	name: "Super Trénink",
	rating: 4.4,
	date: "26.02.1999",
	time: "15:00 - 16:30",
	numOfRegistered: 16,
	organizer: "lospodolos",
	difficulty: "Pokročilý",
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
