export function Tag({ name, color }) {
	return (
		<span
			className={`relative flex-shrink-0 inline-block px-2 py-0.5 text-${color}-800 text-xs font-medium bg-${color}-100 rounded-full`}
		>
			{name}
		</span>
	);
}

Tag.defaultProps = {
	color: "green",
};
