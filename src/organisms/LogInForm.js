import { InputWrapper } from "@src/molecules";
import { ButtonSubmit } from "@src/atoms";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useLazyQuery } from "@apollo/client";
import Router from "next/router";
import toast from "react-hot-toast";
import { useEffect } from "react";

const LOG_IN = gql`
	query UserSignIn($email: String!, $password: String!, $accType: String) {
		userSignIn(email: $email, password: $password, accType: $accType) {
			user {
				id
				verified
			}
			token
		}
	}
`;

export function LogInForm() {
	const [userSignIn, { loading, error, data }] = useLazyQuery(LOG_IN);

	useEffect(() => {
		if (data && !loading) {
			Router.push("/sportoviste");
		}
	}, [data, loading]);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			userSignIn({
				variables: {
					email: values.email,
					password: values.password,
					accType: "sportsman",
				},
			});
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			password: Yup.string().required("Heslo nesmí být prázdné"),
		}),
	});
	return (
		<form className="space-y-9" onSubmit={formik.handleSubmit}>
			<InputWrapper formik={formik} name="email" type="email" isRequired description="E-mail" />
			<InputWrapper
				formik={formik}
				name="password"
				type="password"
				isRequired
				description="Heslo"
			/>
			<ButtonSubmit>Přihlásit se</ButtonSubmit>
		</form>
	);
}
