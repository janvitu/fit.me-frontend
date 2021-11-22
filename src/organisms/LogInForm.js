import { InputWrapper } from "@src/molecules";
import { ButtonSubmit } from "@src/atoms";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import toast from "react-hot-toast";

const LOG_IN = gql`
	mutation LogInSportsman($email: String!, $password: String!) {
		sportsmanSignIn(email: $email, password: $password) {
			token
		}
	}
`;

export function LogInForm() {
	const [logInSportsman] = useMutation(LOG_IN);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			logInSportsman(
				{
					variables: {
						email: values.email,
						password: values.password,
					},
				},
				toast.promise(logInSportsman(), {
					loading: "Vyčkejte prosím, ověřují se údaje",
					success: "Přihlášení bylo úspěšné! Vítejte",
					error: "Přihlášení se nepovedlo, zkuste to znovu, nebo se obraťte na podporu",
				}),
			)
				.then((res) => {
					console.log(res);
					Router.push("/sportoviste");
				})
				.catch((err) => {
					console.error(err);
				})
				.finally(() => {
					formik.resetForm();
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
