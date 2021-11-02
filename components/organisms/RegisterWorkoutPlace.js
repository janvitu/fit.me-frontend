import { InputWrapper } from "@components/molecules";
import { useFormik } from "formik";
import { ButtonSubmit } from "../atoms/ButtonSubmit";
import * as Yup from "yup";

export function RegisterWorkoutPlace() {
	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			email: "",
			ico: "",
			password: "",
			secondPassword: "",
		},
		onSubmit: (values) => {
			console.log(JSON.stringify(values, null));
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Jméno nesmí být prázdné"),
			surname: Yup.string().required("Příjmení nesmí být prázdné"),
			email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			ico: Yup.string()
				.min(8, "IČO musí být dlouhé 8 čísel")
				.max(8, "IČO musí být dlouhé 8 čísel")
				.required("IČO musí být vyplněné"),
			password: Yup.string()
				.min(8, "Heslo musí obsahovat minimálně 8 znaků")
				.required("Heslo musí být vyplněno"),
			secondPassword: Yup.string()
				.oneOf([Yup.ref("password")], `Hesla se neshoduj`)
				.required("Pole musí být vyplněné"),
		}),
	});
	return (
		<form className="space-y-4" onSubmit={formik.onSubmit}>
			<div className="space-y-9">
				<InputWrapper formik={formik} name="name" type="text" isRequired description="Jméno" />
				<InputWrapper
					formik={formik}
					name="surname"
					type="text"
					isRequired
					description="Příjmení"
				/>
				<InputWrapper formik={formik} name="email" type="email" isRequired description="e-mail" />
				<InputWrapper formik={formik} name="ico" type="string" isRequired description="IČO" />
				<InputWrapper
					formik={formik}
					name="password"
					type="password"
					isRequired
					description="heslo"
				/>
				<InputWrapper
					formik={formik}
					name="secondPassword"
					type="password"
					isRequired
					descriptio="Znovu zadejte heslo"
				/>
			</div>
			<ButtonSubmit>Registrovat se</ButtonSubmit>
		</form>
	);
}
