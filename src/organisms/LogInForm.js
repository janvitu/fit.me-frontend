import { InputWrapper } from "@src/molecules";
import { ButtonSubmit } from "@src/atoms";
import { useFormik } from "formik";
import * as Yup from "yup";

export function LogInForm() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
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
