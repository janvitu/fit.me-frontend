import { InputWrapper, TextAreaWrapper } from "@src/molecules";
import { ButtonSubmit } from "@src/atoms";
import { useFormik } from "formik";
import * as Yup from "yup";

export function ContactForm() {
	const formik = useFormik({
		initialValues: {
			email: "",
			subject: "",
			message: "",
		},
		onSubmit: (values) => {
			JSON.stringify(values, null);
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			subject: Yup.string()
				.max(60, "Předmět je příliš dlouhý")
				.required("Předmět nesmí být prázdný"),
			message: Yup.string().required("Zpráva nesmí být prázdný"),
		}),
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="space-y-6"
			id="contact-form"
			name="contact"
			netlify-honeypot="bot-field"
			data-netlify="true"
		>
			<div className="space-y-9">
				<InputWrapper formik={formik} name="email" type="email" isRequired description="e-mail" />
				<InputWrapper formik={formik} name="subject" type="text" isRequired description="Předmět" />
				<TextAreaWrapper
					formik={formik}
					name="message"
					type="text"
					isRequired
					description="Zpráva"
				/>
			</div>
			<ButtonSubmit>Odeslat</ButtonSubmit>
		</form>
	);
}
