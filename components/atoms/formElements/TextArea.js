import { onFocus, onBlur, liveValidate } from "@assets/js/formValidate";

export function TextArea({ name, type, cols, rows, rule, ...other }) {
	return (
		<textarea
			onFocus={onFocus}
			onBlur={(e) => onBlur(e, rule)}
			onInput={(e) => liveValidate(e, rule)}
			name={name}
			type={type}
			className="bg-transparent h-full outline-none pb-3 pl-3 pt-3 resize-none text-gray-700 w-full"
			cols={cols}
			rows={rows}
		></textarea>
	);
}

TextArea.defaultProps = {
	name: "message",
	type: "text",
	cols: "30",
	rows: "10",
	rule: {
		regExp: /^.+$/,
		errMsg: "N/A",
		emptyErr: "Zpráva nesmí být prázdná",
	},
};
