import { InputWrapper } from "@components/atoms/formElements/InputWrapper";
import { Input } from "@components/atoms/formElements/Input";
import { Label } from "@components/atoms/formElements/Label";
import { TextAreaWrapper } from "@components/atoms/formElements/TextAreaWrapper";
import { TextArea } from "@components/atoms/formElements/TextArea";

const RULES = {
	email: {
		regExp:
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		errMsg: "Nesprávný formát emailu",
		emptyErr: "Email nesmí být prázdný",
	},
	subject: {
		regExp: /^(.+){0,60}$/,
		errMsg: "Předmět přesahuje maximální povolenou délku",
		emptyErr: "Předmět nesmí být prázdný",
	},
	message: {
		regExp: /^.+$/,
		errMsg: "N/A",
		emptyErr: "Zpráva nesmí být prázdná",
	},
};

export function ContactForm() {
	return (
		<form
			className="space-y-4"
			id="contact-form"
			name="contact"
			netlify-honeypot="bot-field"
			data-netlify="true"
		>
			<div className="space-y-8">
				<InputWrapper>
					<Input name="email" type="email" rule={RULES.email} />
					<Label htmlFor="email">e-mail</Label>
				</InputWrapper>
				<InputWrapper>
					<Input name="subject" type="text" rule={RULES.subject} />
					<Label htmlFor="subject">Předmět</Label>
				</InputWrapper>
				<TextAreaWrapper>
					<TextArea name="message" type="text" cols="30" rows="10" rule={RULES.message} />
					<Label htmlFor="message">Zpráva</Label>
				</TextAreaWrapper>
			</div>
		</form>
	);
}
