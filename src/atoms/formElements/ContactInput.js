export function ContactInput({ formik, name, placeholder }) {
	return (
		<input
			onChange={formik.handleChange}
			value={formik.values[{ name }]}
			type="text"
			name={name}
			id={name}
			className="py-1 px-3 focus:ring-main-500 focus:border-main-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
			placeholder={placeholder}
		/>
	);
}
