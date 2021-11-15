import { ButtonSubmit } from "@src/atoms";
import { TextAreaWrapper, InputWrapper } from "@src/molecules";
import { useFormik } from "formik";
import * as Yup from "yup";

export function ContactBusinessForm() {
	const formik = useFormik({
		initialValues: {
			subject: "",
			message: "",
		},
		validationSchema: Yup.object({
			subject: Yup.string().required("Předmět nesmí být prázdný"),
			message: Yup.string().required("Zpráva nesmí být prázdná"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit} className="space-y-6" id="contact-form" name="contact">
			<div className="space-y-9">
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
			<ButtonSubmit>Odeslat</ButtonSubmit>
		</form>
	);
}
