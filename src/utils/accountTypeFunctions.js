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

export function addNewAccType(name, surname, email, vat_number, accType) {
	// let addMutation;
	let variables;
	switch (accType) {
		case "sportsground":
			// addMutation = ADD_SPORTSGROUND;
			variables = { name: name, street: street, email: email, city: city, vat_number: vat_number };
		case "coach":
			// addMutation = ADD_COACH;
			variables = { name: name, street: street, email: email, city: city, vat_number: vat_number };
		case "sportsman":
			// addMutation = ADD_SPORTSMAN;
			variables = { name: name, surname: surname, email: email };
	}
	// const [create] = useMutation(addMutation);
	return { ...variables };
}

export function getFormComponents(type, formik) {
	switch (
		type
		// case "sportsman":
		// 	return (
		// 		<div className="flex flex-col gap-4 mt-4 mb-10">
		// 			<InputWrapper
		// 				formik={formik}
		// 				name="name"
		// 				type="text"
		// 				isRequired={true}
		// 				description="Jméno"
		// 			/>
		// 			<InputWrapper
		// 				formik={formik}
		// 				name="surname"
		// 				type="text"
		// 				isRequired={true}
		// 				description="Příjmení"
		// 			/>
		// 		</div>
		// 	);
		// 	case "coach":
		// 		return(

		// 		)
	) {
	}
}
