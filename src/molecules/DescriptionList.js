import { DescriptionTerm, DescriptionDetail } from "@src/atoms";

export function DescriptionList({ items }) {
	function Descriptions({ items }) {
		return items.map((item, index) => {
			return (
				<div key={index}>
					<DescriptionTerm>{item.title}</DescriptionTerm>
					<DescriptionDetail>{item.value}</DescriptionDetail>
				</div>
			);
		});
	}

	return (
		<dl className="grid grid-cols-1 gap-x-4 gap-y-8">
			<Descriptions items={items} />
		</dl>
	);
}
