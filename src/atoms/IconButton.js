export function IconButton({ children, type, onClick, ...rest }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex items-center justify-center ${rest.className}`}
		>
			{children}
		</button>
	);
}
