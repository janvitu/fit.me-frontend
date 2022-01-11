import { XlWrapper } from "@src/atoms";
import { EventsList, DynamicListHeader } from "@src/templates";
import { DynamicSite } from "@src/templates/DynamicSite";
import { useState } from "react";

export default function Events() {
	const [filters, setFilters] = useState({
		tags: [],
		order: "",
	});
	return (
		<DynamicSite>
			<DynamicListHeader
				filters={filters}
				setFilters={setFilters}
				namePlural="Lekce"
				nameAkuzativ="lekci"
				placeholder="tennis"
			/>
			<section className="mx-auto">
				<XlWrapper>
					<EventsList filters={filters} />
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
