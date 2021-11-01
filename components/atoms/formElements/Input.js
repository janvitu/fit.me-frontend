import { onFocus, onBlur, liveValidate } from "@assets/js/formValidate";

export function Input({ name, type, rule, isRequired }) {
	return (
		<input
			onFocus={onFocus}
			onBlur={(e) => onBlur(e, rule)}
			onInput={(e) => liveValidate(e, rule)}
			name={name}
			type={type}
			className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
			required={isRequired}
		/>
	);
}

Input.defaultProps = {
	name: "name",
	type: "text",
	isRequired: false,
	rule: {
		regExp:
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		errMsg: "Nesprávný formát emailu",
		emptyErr: "Email nesmí být prázdný",
	},
};
