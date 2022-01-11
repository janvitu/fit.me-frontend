import { useEffect, useState } from "react";
import { H3, IconButton } from "@src/atoms";
import { DescriptionList, RatingIndicator } from "@src/molecules";
import { disableScroll, enableScroll } from "@src/utils/handleScroll";

export function DetailCard({ descriptionItems, rating = 0 }) {
	const [toggled, setToggled] = useState(false);

	useEffect(() => {
		if (toggled) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [toggled]);

	return (
		<>
			<button
				type="button"
				onClick={() => setToggled(!toggled)}
				className={`fixed w-screen h-screen inset-0 bg-black opacity-40 z-30 transition-all ${
					toggled ? "block" : "hidden"
				}`}
			></button>
			<div
				className={`fixed w-max min-w-[320px] sm:min-w-[360px] top-32 max-w-[85vw] left-full transform  ${
					toggled ? "-translate-x-full z-30" : "z-10"
				} transform md:static transition-transform`}
			>
				<div className="bg-white shadow rounded-md sm:rounded-lg max-w-sm max-h-[75vh] flex flex-col">
					<div className="relative px-4 py-5 sm:px-6 overflow-visible">
						<H3 variant="small">Detail</H3>
						{rating && (
							<div className="flex gap-2">
								<RatingIndicator ratingValue={rating} className="mt-2" />
								<span className="text-xs text-gray-500 mt-1">({rating})</span>
							</div>
						)}
						<div className="absolute -bottom-px right-full md:hidden border-l border-t border-b rounded-l-md bg-white">
							<IconButton type="button" onClick={() => setToggled(!toggled)} className="px-4 py-4">
								<svg
									aria-hidden="true"
									role="img"
									className={`h-5 w-[10px] ${toggled ? "rotate-180" : ""}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
								>
									<path
										fill="currentColor"
										d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
									></path>
								</svg>
							</IconButton>
						</div>
					</div>
					{descriptionItems && (
						<div className="border-t border-gray-200 px-4 py-5 sm:px-6 flex-grow overflow-y-scroll">
							<DescriptionList items={descriptionItems} />
						</div>
					)}
				</div>
			</div>
		</>
	);
}

DetailCard.defaultProps = {
	descriptionItems: [
		{
			title: "Nabízené sporty",
			value: "Yoga, Tenis",
		},
		{
			title: "Způsob platby",
			value: "ApplePay, Cash, Mulrisport",
		},
		{
			title: "Zázemí",
			value: "Sprchy, vybavení",
		},
		{
			title: "Kontakt",
			value: "Email: abcsportoviste@info.cz",
		},
		{
			title: "Adresa",
			value: "U sportoviště 66, Praha 6, 166 66",
		},
		{
			title: "Otevírací doba:",
			value: "Po-Ne: 6:00 - 17:00",
		},
	],
	rating: 4,
};
