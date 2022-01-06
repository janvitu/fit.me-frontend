export function ContactLabel({ htmlfor = "name", children }) {
	return (
		<label
			htmlFor={htmlfor}
			className="w-16 py-1 px-3 inline-flex items-center px-3 rounded-l-md border border-r-1 border-gray-300 bg-gray-50 text-gray-500 text-sm"
		>
			{children}
		</label>
	);
}
