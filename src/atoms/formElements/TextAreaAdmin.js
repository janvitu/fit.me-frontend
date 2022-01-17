export function TextAreaAdmin({ formik, name }) {
	return (
		<textarea
			onChange={formik.handleChange}
			value={formik.values[name]}
			id={name}
			name={name}
			rows={2}
			className="py-1 px-3 shadow-sm focus:ring-main-500 focus:border-main-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
		/>
	);
}
