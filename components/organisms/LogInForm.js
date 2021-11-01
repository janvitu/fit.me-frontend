import { InputWrapper, Input, Label } from "@components/atoms";

export function LogInForm() {
	return (
		<form className="space-y-4">
			<InputWrapper>
				<Input name="username" type="text" />
				<Label htmlFor="username">Uživatelské jméno / e-mail</Label>
			</InputWrapper>
			<InputWrapper>
				<Input name="password" type="password" />
				<Label htmlFor="password">Heslo</Label>
			</InputWrapper>
		</form>
	);
}
