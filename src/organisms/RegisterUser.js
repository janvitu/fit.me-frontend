import { InputWrapper } from "@src/molecules";
import { useFormik } from "formik";
import { ButtonSubmit } from "../atoms/ButtonSubmit";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";

const REGISTER_USER = gql`
	mutation RegisterSportsman(
		$name: String!
		$surname: String!
		$email: String!
		$password: String!
	) {
		sportsmanSignUp(name: $name, surname: $surname, email: $email, password: $password)
	}
`;

export function RegisterUser() {
	const [registerSportsman] = useMutation(REGISTER_USER);
	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			email: "",
			password: "",
			secondPassword: "",
		},
		onSubmit: (values) => {
			registerSportsman({
				variables: {
					name: values.name,
					surname: values.surname,
					email: values.email,
					password: values.password,
				},
			})
				.then((res) => {
					console.log(res);
					Router.push("/prihlasit-se");
				})
				.catch((err) => {
					console.log(err);
				});
			formik.resetForm();
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Jméno nesmí být prázdné"),
			surname: Yup.string().required("Příjmení nesmí být prázdné"),
			email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			password: Yup.string()
				.min(8, "Heslo musí obsahovat minimálně 8 znaků")
				.required("Heslo musí být vyplněno")
				.matches(/^(?=.*[a-záčďéěíňóřšťúůýž])/, "Heslo musí obsahovat alespoň jedno malé písmeno")
				.matches(/^(?=.*[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ])/, "Heslo musí obsahovat alespoň jedno velké písmeno")
				.matches(/^(?=.*\d)/, "Heslo musí obsahovat alespoň jedno číslo"),
			secondPassword: Yup.string()
				.oneOf([Yup.ref("password")], `Hesla se neshoduj`)
				.required("Pole musí být vyplněné"),
		}),
	});
	return (
		<form className="space-y-9" onSubmit={formik.handleSubmit}>
			<div className="space-y-9">
				<InputWrapper formik={formik} name="name" type="text" isRequired description="Jméno" />
				<InputWrapper
					formik={formik}
					name="surname"
					type="text"
					isRequired
					description="Příjmení"
				/>
				<InputWrapper formik={formik} name="email" type="email" isRequired description="Email" />
				<InputWrapper
					formik={formik}
					name="password"
					type="password"
					isRequired
					description="Heslo"
				/>
				<InputWrapper
					formik={formik}
					name="secondPassword"
					type="password"
					isRequired
					description="Znovu zadejte heslo"
				/>
			</div>
			<div className="flex justify-center">
				<ButtonSubmit>Registrovat se</ButtonSubmit>
			</div>
		</form>
	);
}
