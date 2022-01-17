import { ButtonFilter } from "@src/atoms";
import { Filter } from "@src/molecules";

export function FilterWithTags({ filters, setFilters }) {
	return (
		<div className="flex flex-col gap-y-5">
			<Filter name="Tagy" filters={filters} setFilters={(val) => setFilters(val)} />

			<div className=" flex gap-x-3 gap-y-1 flex-wrap">
				{filters.tags.map((tag, index) => (
					<ButtonFilter name={tag} filters={filters} setFilters={setFilters} key={index} />
				))}
			</div>
		</div>
	);
}
