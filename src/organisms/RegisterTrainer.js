import { ButtonSubmit } from "@src/atoms";
import { InputWrapper } from "@src/molecules";
import { useFormik } from "formik";

import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import Router from "next/router";

const RGISTER_TRAINTER = gql`
	mutation CreateTrainer(
		$name: String!
		$surname: String!
		$email: String!
		$vat_number: String!
		$password: String!
	) {
		createCoach(
			name: $name
			surname: $surname
			email: $email
			vat_number: $vat_number
			password: $password
		)
	}
`;

export function RegisterTrainer() {
	const [createCoach] = useMutation(RGISTER_TRAINTER);
	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			email: "",
			vat_number: "",
			password: "",
			secondPassword: "",
		},
		onSubmit: (values) => {
			const load = toast.loading("Požadavek se zpracovává");
			createCoach({
				variables: {
					name: values.name,
					surname: values.surname,
					email: values.email,
					vat_number: String(values.vat_number),
					password: values.password,
				},
			})
				.then((res) => {
					Router.push("/prihlasit-se");
					toast.dismiss(load);
					toast.success(
						"Na váš email jsme poslali potvrzení registrace. Pro přihlášení do aplikace je potřeba již poslední krok, kterým je potvrzení správnosti vašeho emailového účtu tím, že kliknete na odkaz ve vašem emailu.",
					);
				})
				.catch((err) => {
					console.log(err);
					toast.dismiss(load);
					toast.error("Registrace se nezdařila");
				})
				.finally(() => {
					formik.resetForm();
				});
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Jméno nesmí být prázdné"),
			surname: Yup.string().required("Příjmení nesmí být prázdné"),
			email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			vat_number: Yup.string()
				.max(8, "IČO může obsahovat maximálně 8 čísel")
				.required("IČO musí být vyplněné"),
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
				<InputWrapper
					formik={formik}
					name="vat_number"
					type="string"
					isRequired
					description="IČO"
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
