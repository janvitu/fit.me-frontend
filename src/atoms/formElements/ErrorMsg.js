export function ErrorMsg({ msg }) {
	return (
		<div className="absolute -bottom-1 italic pl-4 text-left text-sm transform translate-y-full w-full">
			<span className="w-full text-yellow-500">{msg}</span>
		</div>
	);
}
