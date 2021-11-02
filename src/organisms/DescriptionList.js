import { DescriptionListItem } from "@src/molecules";

export function DescriptionList({ list }) {
	return (
		<div className="mt-10">
			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				{list &&
					list.map((item, i) => (
						<DescriptionListItem
							key={i}
							term={item.term}
							description={item.description}
							svgDraw={item.svgDraw}
						/>
					))}
			</dl>
		</div>
	);
}
