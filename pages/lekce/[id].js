import { DynamicSite } from "@src/templates";
import { EventProfileTemplate } from "@src/templates";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const GET_EVENT = gql`
	query GetEvents($id: ID!) {
		getEvent(id: $id) {
			id
			name
			description
			datetime_from
			datetime_to
			difficulty
			sportsground {
				id
				username
			}
			tags {
				name
				color
			}
			exercises {
				name
			}
			numOfRegistered
			sportsmans {
				username
				name
				surname
				profile_photo {
					name
					location
				}
			}
		}
	}
`;

export default function EventPage({}) {
	const router = useRouter();
	const { id } = router.query;
	const { loading, error, data } = useQuery(GET_EVENT, {
		variables: { id: id },
	});

	return (
		<DynamicSite>
			{!loading && !error && <EventProfileTemplate EventProfileData={data.getEvent} />}
		</DynamicSite>
	);
}
