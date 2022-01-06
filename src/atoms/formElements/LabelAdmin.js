export function LabelAdmin({ htmlfor = "name", children }) {
	return (
		<label htmlFor={htmlfor} className="block text-sm font-medium text-gray-700">
			{children}
		</label>
	);
}
