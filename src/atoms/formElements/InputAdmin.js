export function InputAdmin({ formik, name = "name", type = "text" }) {
	return (
		<input
			onChange={formik.handleChange}
			value={formik.values[name]}
			type={type}
			name={name}
			id={name}
			autoComplete={name}
			className="py-1 px-3 mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
		/>
	);
}
