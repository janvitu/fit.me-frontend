export function ModalOverlay({ onClick, ...rest }) {
	return (
		<button
			onClick={onClick}
			className="absolute w-screen h-screen inset-0 bg-black opacity-40 transition-all"
		></button>
	);
}
