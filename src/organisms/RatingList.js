import { RatingItem } from "@src/molecules";

export function RatingList({ reviews }) {
	return (
		<ul role="list">
			{reviews.map((review, index) => (
				<RatingItem key={index} review={review} />
			))}
		</ul>
	);
}
