import { RatingIndicator, TagList } from "@src/molecules";
import Link from "next/link";
import Image from "next/image";

export function PlaceCard({ name, username, description, tags, img, rating }) {
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
							<div>{tags && <TagList tags={tags} />}</div>
							<p className="mt-1 text-gray-500 text-sm truncate">{description}</p>
						</div>
						<Image
							className="bg-gray-300 rounded-full flex-shrink-0"
							width="40"
							height="40"
							src={img.location}
							alt={img.name}
						/>
					</div>
				</a>
			</Link>
		</div>
	);
}
