export function ModalWithClose({ closeModal, children }) {
	return (
		<div className="fixed z-110 inset-0 w-screen h-screen bg-black bg-opacity-50">
			<svg
				onClick={closeModal}
				className="h-10 w-10 fixed z-110 right-4 top-4 cursor-pointer"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="white"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
			<div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				{children}
			</div>
		</div>
	);
}
