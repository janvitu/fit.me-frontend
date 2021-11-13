import { RatingItem } from "@src/molecules";

export function RatingList({ ratingList }) {
	return (
		<ul role="list">
			{ratingList.map((ratingItem, index) => (
				<RatingItem key={index} ratingItem={ratingItem} />
			))}
		</ul>
	);
}

RatingList.defaultProps = {
	ratingList: [
		{
			id: 1,
			user: {
				name: "John Doe",
				avatar: "https://placeimg.com/64/64/people",
			},
			submitedAt: "1 day ago",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
		},
	],
};
