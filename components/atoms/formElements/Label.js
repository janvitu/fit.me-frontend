export function Label({ htmlFor, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className="absolute block ml-3 px-1.5 top-[9px] transform transition-all"
		>
			{children}
		</label>
	);
}

Label.defaultProps = {
	htmlFor: "name",
};
