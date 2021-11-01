import { InputWrapper } from "@components/molecules";
import { TextAreaWrapper } from "@components/molecules";

import { useEffect } from "react";
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

	useEffect(() => {
		console.log(formik);
		console.log(formik.touched["email"]);
	}, [formik]);

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
					cols="30"
					rows="10"
					isRequired
					description="Zpráva"
				/>
			</div>
		</form>
	);
}
