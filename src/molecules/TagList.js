import { useState } from "react";
import { Tag } from "@src/atoms";

export function TagList({ tags }) {
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
					{!tagsToggled ? "Zobrazit více" : "Skrýt"}
				</button>
			)}
		</div>
	);
}
