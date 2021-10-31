import { DescriptionListTerm, SmallDescription } from "@components/atoms";

export function DescriptionListItem({ term, description, svgDraw }) {
	return (
		<div className="relative">
			<DescriptionListTerm svgDraw={svgDraw}>{term}</DescriptionListTerm>
			<SmallDescription>{description}</SmallDescription>
		</div>
	);
}
