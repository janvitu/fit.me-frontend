import { AdminTrainerForm } from "@src/organisms";
import { DynamicSite } from "@src/templates";
import { XlWrapper } from "@src/atoms";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_FULLCOACH = gql`
	query GetAll($username: String!) {
		getCoach(username: $username) {
			id
			username
			name
			surname
			vat_number
			phone
			address {
				street
				no
				city
				region
				state
				zip_code
			}
			specialization
			intro_text
			description
			profile_photo {
				id
				name
				location
			}
		}
	}
`;

const SPORTS_GROUND_MUTATION = gql`
	mutation updateCoach(
		$token: String!
		$name: String!
		$surname: String!
		$phone: String!
		$vat_number: String!
		$intro_text: String!
		$specialization: String!
		$description: String!
	) {
		updateCoach(
			token: $token
			name: $name
			surname: $surname
			phone: $phone
			vat_number: $vat_number
			intro_text: $intro_text
			specialization: $specialization
			description: $description
		)
	}
`;

export default function TrainerAdminPage() {
	const router = useRouter();
	const { name } = router.query;
	const { data, loading, error } = useQuery(GET_FULLCOACH, { variables: { username: name } });

	const [updateCoach] = useMutation(SPORTS_GROUND_MUTATION);

	return (
		<>
			<DynamicSite>
				<div className="bg-gray-100">
					<XlWrapper>
						{!loading && !error && <AdminTrainerForm data={data.getCoach} sendData={updateCoach} />}
						<div className="hidden sm:block" aria-hidden="true">
							<div className="py-5">
								<div className="border-t border-gray-200" />
							</div>
						</div>
					</XlWrapper>
				</div>
			</DynamicSite>
		</>
	);
}
