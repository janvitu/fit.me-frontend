import { useState } from "react";
import { Tag } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";
import Link from "next/link";
import { ModalEvent } from "@src/molecules";
import { parseDate, getTimePeriod } from "@src/utils/dateHandler";

export function EventCard({
	id,
	name,
	datetime_from,
	datetime_to,
	difficulty,
	tags,
	exercises,
	sportsground,
	sportsmans,
	numOfRegistered,
	modal = false,
	img = hooliIcon,
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
		<div className="relative overflow-hidden bg-white rounded-lg shadow divide-y divide-gray-200">
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
						name={name}
						datetime_from={date}
						datetime_to={time}
						difficulty={difficulty}
						tags={tags}
						exercises={exercises}
						sportsmans={sportsmans}
						img={img}
					/>
				</>
			)}
			<Link href={`/lekce/${id}`} passHref>
				<a>
					<div className="relative w-full h-full flex items-center gap-6 p-6">
						<div className="absolute left-0 top-0 bottom-0 w-24 md:w-32">
							<img
								src={`https://paxjrxehftbgfclkcnoi.supabase.in/storage/v1/object/public/fitme-imgs/event/${id}/cover_photo.jpg`}
								alt="Event Image"
								className="mx-auto h-full object-cover"
							/>
						</div>
						<div className="flex-1 ml-24 md:ml-28">
							<div className="flex flex-col sm:flex-row text-gray-500">
								<div className="font-bold text-sm">{parseDate(new Date(datetime_from))} </div>
								<div className="font-bold text-sm hidden sm:block">&nbsp;|&nbsp;</div>
								<div className="text-sm font-normal">
									{getTimePeriod(new Date(datetime_from), new Date(datetime_to))}
								</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="mr-4 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3x">
									{name}
								</div>
							</div>
							<span className="text-xs text-gray-400">@{sportsground.username}</span>

							<div className="mt-2">
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
