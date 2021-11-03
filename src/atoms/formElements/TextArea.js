export function TextArea({
	formik,
	name,
	type,
	cols,
	rows,
	isRequired,
	setIsVisited,
	setIsFocused,
}) {
	return (
		<textarea
			onFocus={() => {
				setIsFocused(true);
				setIsVisited(true);
			}}
			onBlur={(e) => {
				setIsFocused(false);
				formik.handleBlur(e);
			}}
			onChange={formik.handleChange}
			name={name}
			type={type}
			value={formik.values[name]}
			className="bg-transparent h-full outline-none pb-3 pl-3 pt-3 resize-none text-gray-700 w-full"
			cols={cols}
			rows={rows}
			required={isRequired}
		></textarea>
	);
}

TextArea.defaultProps = {
	name: "message",
	type: "text",
	cols: "30",
	rows: "10",
};
