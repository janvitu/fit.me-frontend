import { DynamicSite } from "@src/templates";
import { AdminPlaceForm } from "@src/organisms";
import { XlWrapper } from "@src/atoms";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const SPORTS_GROUND_MUTATION = gql`
	mutation UpdateSportsground(
		$token: String!
		$name: String!
		$opening_hours_from: String!
		$opening_hours_to: String!
		$web: String!
		$phone: String!
		$description: String!
		$street: String!
		$no: String!
		$city: String!
		$vat_number: String!
		$intro_text: String!
		$region: String!
		$state: String!
		$zip_code: String!
		$cover_photo_url: String
		$profile_photo_url: String
	) {
		updateSportsground(
			token: $token
			name: $name
			opening_hours_from: $opening_hours_from
			opening_hours_to: $opening_hours_to
			web: $web
			phone: $phone
			description: $description
			street: $street
			no: $no
			vat_number: $vat_number
			intro_text: $intro_text
			city: $city
			region: $region
			state: $state
			zip_code: $zip_code
			cover_photo_url: $cover_photo_url
			profile_photo_url: $profile_photo_url
		)
	}
`;
const GET_FULLSPORTSGROUND = gql`
	query GetSportsground($username: String!) {
		getSportsground(username: $username) {
			id
			name
			description
			opening_hours_from
			opening_hours_to
			phone
			web
			intro_text
			vat_number
			address {
				id
				street
				no
				city
				region
				state
				zip_code
			}
		}
	}
`;

export default function PlaceAdminPage() {
	const router = useRouter();
	const { name } = router.query;
	const { data, loading, error } = useQuery(GET_FULLSPORTSGROUND, {
		variables: { username: name },
	});
	console.log("data", data);
	const [updateSportsground] = useMutation(SPORTS_GROUND_MUTATION);
	return (
		<>
			<DynamicSite>
				<div className="bg-gray-100">
					<XlWrapper>
						{!loading && !error && (
							<AdminPlaceForm data={data.getSportsground} sendData={updateSportsground} />
						)}
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
