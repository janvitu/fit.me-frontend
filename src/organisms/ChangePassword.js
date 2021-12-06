import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { InputWrapper, Modal } from "@src/molecules";
import { H3, ButtonSubmit } from "@src/atoms";

const CHANGE_PASSWORD = gql`
	mutation ChangePassword(
		$name: String!
		$surname: String!
		$email: String!
		$vat_number: Number!
		$password: String!
	) {
		changePassword(
			name: $name
			surname: $surname
			email: $email
			vat_number: $vat_number
			password: $password
		)
	}
`;

export function ChangePassword() {
	const [isVisible, setIsVisible] = useState(false);
	const [changePasssword] = useMutation(CHANGE_PASSWORD);
	const formik = useFormik({
		initialValues: {
			oldpwd: "",
			newpwd: "",
			newpwd2: "",
		},
		onSubmit: (values) => {
			console.log(values);
			const load = toast.loading("Požadavek se zpracovává");
			changePasssword({
				variables: {
					name: values.name,
					surname: values.surname,
					email: values.email,
				},
			})
				.then((res) => {
					console.log(res);
					Router.push("/prihlasit-se");
					toast.dismiss(load);
					toast.success("Heslo úspěšně změněno");
				})
				.catch((err) => {
					console.log(err);
					toast.dismiss(load);
					toast.error("Změna hesla se nezdařila");
				})
				.finally(() => {
					formik.resetForm();
				});
		},
		validationSchema: Yup.object().shape({
			oldpwd: Yup.string()
				.min(8, "Heslo musí obsahovat minimálně 8 znaků")
				.required("Heslo nesmí být prázdné")
				.matches(/^(?=.*[a-záčďéěíňóřšťúůýž])/, "Heslo musí obsahovat alespoň jedno malé písmeno")
				.matches(/^(?=.*[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ])/, "Heslo musí obsahovat alespoň jedno velké písmeno")
				.matches(/^(?=.*\d)/, "Heslo musí obsahovat alespoň jedno číslo"),
			newpwd: Yup.string()
				.min(8, "Heslo musí obsahovat minimálně 8 znaků")
				.required("Heslo nesmí být prázdné")
				.matches(/^(?=.*[a-záčďéěíňóřšťúůýž])/, "Heslo musí obsahovat alespoň jedno malé písmeno")
				.matches(/^(?=.*[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ])/, "Heslo musí obsahovat alespoň jedno velké písmeno")
				.matches(/^(?=.*\d)/, "Heslo musí obsahovat alespoň jedno číslo")
				.notOneOf([Yup.ref("oldpwd")], "Musíte zadat jiné než předchozí heslo"),
			newpwd2: Yup.string()
				.oneOf([Yup.ref("newpwd")], `Hesla se neshodují`)
				.required("Pole musí být vyplněné"),
		}),
	});
	return (
		<div>
			<a href="#" onClick={() => setIsVisible(true)}>
				Změnit heslo
			</a>
			<Modal isOpen={isVisible} onClose={() => setIsVisible(!isVisible)}>
				<H3>Změna hesla</H3>
				<form className="space-y-9">
					<InputWrapper
						formik={formik}
						name="oldpwd"
						type="password"
						isRequired
						description="Staré heslo"
					/>
					<InputWrapper
						formik={formik}
						name="newpwd"
						type="password"
						isRequired
						description="Nové heslo"
					/>
					<InputWrapper
						formik={formik}
						name="newpwd2"
						type="password"
						isRequired
						description="Nové heslo (pro kontrolu)"
					/>
					<ButtonSubmit>Změnit heslo</ButtonSubmit>
				</form>
			</Modal>
		</div>
	);
}
