import { DescriptionListTerm, DescriptionListDescription } from "@src/atoms";

export function DescriptionListItem({ term, description, svgDraw }) {
	return (
		<div className="relative">
			<DescriptionListTerm svgDraw={svgDraw}>{term}</DescriptionListTerm>
			<DescriptionListDescription>{description}</DescriptionListDescription>
		</div>
	);
}
