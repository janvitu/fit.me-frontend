import { gql, useQuery } from "@apollo/client";
import { DynamicSite, BusinessProfileTemplate } from "@src/templates";
import { useRouter } from "next/router";

const GET_COACH = gql`
	query GetCoach($username: String!) {
		getCoach(username: $username) {
			id
			username
			name
			surname
			vat_number
			phone
			description
			profile_photo {
				name
				location
			}
			specializations
			address {
				id
				street
				no
				city
				state
				zip_code
			}
			reqirements
			details {
				title
				value
			}
			rating
			reviews {
				stars
				comment
				datetime
				sportsman {
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
	}
`;

export default function Trainer() {
	const router = useRouter();
	const { name } = router.query;
	const { loading, error, data } = useQuery(GET_COACH, {
		variables: { username: name },
	});
	return (
		<DynamicSite>
			{!loading && !error && (
				<BusinessProfileTemplate BusinessProfileData={data.getCoach} type="coach" />
			)}
		</DynamicSite>
	);
}
