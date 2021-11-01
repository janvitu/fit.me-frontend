import { DescriptionListTerm, DescriptionListDescription } from "@components/atoms";

export function DescriptionListItem({ term, description, svgDraw }) {
	return (
		<div className="relative">
			<DescriptionListTerm svgDraw={svgDraw}>{term}</DescriptionListTerm>
			<DescriptionListDescription>{description}</DescriptionListDescription>
		</div>
	);
}
