import { RatingIndicator } from "@src/molecules";

export function RatingItem({ review }) {
	const calculateTime = (date) => {
		const now = new Date();
		const ratingDate = new Date(date);
		const diff = now.getTime() - ratingDate.getTime();
		const diffMinutes = Math.floor(diff / (1000 * 60));
		const diffHours = Math.floor(diff / (1000 * 60 * 60));
		const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
		const diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
		const diffMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
		const diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

		if (diffMinutes < 1) {
			return "nyní";
		}
		if (diffMinutes < 60) {
			if (diffMinutes === 1) {
				return "před minutou";
			} else {
				return `před ${diffMinutes} minutami`;
			}
		}
		if (diffHours < 24) {
			if (diffHours === 1) {
				return "před hodinou";
			} else {
				return `před ${diffHours} hodinami`;
			}
		}
		if (diffDays < 7) {
			if (diffDays === 1) {
				return "před dnem";
			} else {
				return `před ${diffDays} dny`;
			}
		}
		if (diffWeeks < 4) {
			if (diffWeeks === 1) {
				return "před týdnem";
			} else {
				return `před ${diffWeeks} týdny`;
			}
		}
		if (diffMonths < 12) {
			if (diffMonths === 1) {
				return "před měsícem";
			} else {
				return `před ${diffMonths} měsíci`;
			}
		}

		if (diffYears === 1) {
			return "před rokem";
		}
		return `před ${diffYears} lety`;
	};

	return (
		<li>
			<div className="relative flex items-start space-x-3 pb-8">
				<img
					className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
					src=""
					alt={`Avatar`}
				/>
				<div className="flex-1">
					<div className="flex gap-4">
						<div>
							<div className="text-sm font-medium text-gray-900">
								{`${review.sportsman.name} ${review.sportsman.surname}`}
							</div>
							<p className="mt-0.5 text-sm text-gray-500">{calculateTime(review.datetime)}</p>
						</div>
						<RatingIndicator ratingValue={review.stars} />
					</div>
					<div className="mt-2 text-sm text-gray-700">
						<p>{review.comment}</p>
					</div>
				</div>
			</div>
		</li>
	);
}
