import { gql, useMutation } from "@apollo/client";

export function derivateAccType(type) {
	switch (type) {
		case "sportsground":
			return "Sportoviště";
		case "coach":
			return "Trenér";
		case "sportsman":
			return "Sportovec";
	}
}

export const ADD_SPORTSMAN = gql`
	mutation CreateSportsman($name: String!, $surname: String!, $email: String!) {
		createSportsman(name: $name, surname: $surname, email: $email)
	}
`;

export const ADD_COACH = gql`
	mutation CreateCoach($name: String!, $surname: String!, $vat_number: String!, $email: String!) {
		createCoach(name: $name, surname: $surname, vat_number: $vat_number, email: $email)
	}
`;
export const ADD_SPORTSGROUND = gql`
	mutation CreateSportsGround(
		$name: String!
		$street: String!
		$city: String!
		$number: String!
		$zip: String!
		$country: String!
		$email: String!
		$vat_number: String!
	) {
		createSportsground(
			name: $name
			street: $street
			city: $city
			number: $number
			zip: $zip
			country: $country
			email: $email
			vat_number: $vat_number
		)
	}
`;
export const REFRESH = gql`
	query RefreshToken($token: String!) {
		refreshToken(token: $token)
	}
`;
