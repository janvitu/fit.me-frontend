export function Input({ formik, name, type, isRequired, setIsFocused, setIsVisited }) {
	return (
		<input
			onFocus={() => {
				setIsFocused(true);
				setIsVisited(true);
			}}
			onBlur={(e) => {
				setIsFocused(false);
				formik.handleBlur(e);
			}}
			onChange={formik.handleChange}
			id={name}
			name={name}
			type={type}
			value={formik.values[name]}
			className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
			required={isRequired}
		/>
	);
}

Input.defaultProps = {
	name: "name",
	type: "text",
	isRequired: false,
};
