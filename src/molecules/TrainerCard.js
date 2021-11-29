import { ButtonCard, Tag } from "@src/atoms";
import { RatingIndicator } from "@src/molecules";
import hooliIcon from "@assets/img/hooli-brands.svg";
import Link from "next/link";
import Image from "next/image";

export function TrainerCard({ name, username, description, tags, img, rating }) {
	return (
		<div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow ">
			<Link href={`/treneri/${username}`} passHref>
				<a>
					<div className="flex-1 flex flex-col p-8 ">
						<div className="w-32 h-32 flex-shrink-0 mx-auto object-cover rounded-full">
							<Image
								width="128"
								height="128"
								className="w-32 h-32 flex-shrink-0 mx-auto object-cover rounded-full"
								src={img}
								alt="alt"
							/>
						</div>
						<h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>
						<RatingIndicator ratingValue={rating} className="self-center" />
						<dl className="mt-1 flex-grow flex flex-col justify-between">
							<dt className="sr-only">Description</dt>
							<dd className="text-gray-500 text-sm">{description}</dd>
							<dt className="sr-only">Specializations</dt>
							<dd className="mt-3 space-x-1 space-y-1">
								{tags.map((tag, index) => (
									<Tag name={tag.name} color={tag.color} key={index} />
								))}
							</dd>
						</dl>
					</div>
				</a>
			</Link>
		</div>
	);
}

TrainerCard.defaultProps = {
	name: "Robert Chott",
	username: "robertchott",
	description: "Váš osobní trenér za cestou úlevy",

	img: hooliIcon.src,
};
