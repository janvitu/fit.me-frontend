import { XlWrapper } from "@src/atoms";
import { EventsList, DynamicListHeader } from "@src/templates";
import { DynamicSite } from "@src/templates/DynamicSite";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_EVENTS = gql`
	query GetEvents {
		getEvents {
			id
			name
			datetime_from
			datetime_to
			sportsground {
				username
			}
			tags {
				name
				color
			}
			numOfRegistered
		}
	}
`;
export default function Events() {
	const { error, loading, data } = useQuery(GET_EVENTS);
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
					{!loading && !error && <EventsList events={data.getEvents} filters={filters} />}
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
