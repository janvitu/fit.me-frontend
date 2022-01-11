import { useState } from "react";
import { XlWrapper } from "@src/atoms";
import { TrainersList } from "@src/organisms";
import { DynamicSite } from "@src/templates/DynamicSite";
import { gql, useQuery } from "@apollo/client";
import { DynamicListHeader } from "@src/templates";

const GET_COACHES = gql`
	query GetCoaches {
		getCoaches {
			id
			username
			name
			surname
			description
			specializations
			rating
		}
	}
`;

export default function Trainers() {
	const { loading, error, data } = useQuery(GET_COACHES);
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
					{!loading && !error && <TrainersList trainers={data.getCoaches} filters={filters} />}
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
