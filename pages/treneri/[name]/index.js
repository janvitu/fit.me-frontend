import { gql, useQuery } from "@apollo/client";
import { DynamicSite, BusinessProfileTemplate } from "@src/templates";
import { useRouter } from "next/router";
// import { TrainerBusinessData } from "@src/dummyData";

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
	console.log(data);
	return (
		<DynamicSite>
			{!loading && !error && <BusinessProfileTemplate BusinessProfileData={data.getCoach} />}
		</DynamicSite>
	);
}
