import { XlWrapper } from "@src/atoms";
import { PlacesList, DynamicListHeader } from "@src/templates";
import { DynamicSite } from "@src/templates/DynamicSite";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_SPORTSGROUNDS = gql`
	query GetSportsgrounds {
		getSportsgrounds {
			id
			name
			username
			description
			tags {
				name
				color
			}
			rating
		}
	}
`;

export default function Places() {
	const { loading, error, data } = useQuery(GET_SPORTSGROUNDS);
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
					{!loading && !error && <PlacesList places={data.getSportsgrounds} filters={filters} />}
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
