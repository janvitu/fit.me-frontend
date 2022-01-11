import { XlWrapper } from "@src/atoms";
import { PlacesList, DynamicListHeader } from "@src/templates";
import { DynamicSite } from "@src/templates/DynamicSite";
import { useState } from "react";

export default function Places() {
	const [filters, setFilters] = useState({
		tags: [],
		order: "",
	});

	return (
		<DynamicSite>
			<DynamicListHeader
				filters={filters}
				setFilters={setFilters}
				namePlural="Sportoviště"
				nameAkuzativ="sportoviště"
				placeholder="U Jindřišské věže 23 / Praha / XFitness"
			/>

			<section className="mx-auto">
				<XlWrapper>
					<PlacesList
						// places={places}
						filters={filters}
					/>
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
