import { useState } from "react";
import { XlWrapper } from "@src/atoms";
import { TrainersList } from "@src/organisms";
import { DynamicSite } from "@src/templates/DynamicSite";
import { DynamicListHeader } from "@src/templates";

export default function Trainers() {
	const [filters, setFilters] = useState({
		tags: [],
		order: "",
	});
	return (
		<DynamicSite>
			<DynamicListHeader
				filters={filters}
				setFilters={setFilters}
				namePlural="Trenéři"
				nameAkuzativ="trenéra"
				placeholder="John Doe"
			/>

			<section className="mx-auto">
				<XlWrapper>
					<TrainersList
						// trainers={trainers}
						filters={filters}
					/>
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
