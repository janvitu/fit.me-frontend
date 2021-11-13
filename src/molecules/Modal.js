import { ModalOverlay } from "@src/atoms";

export function Modal({ children, onClose, isOpen }) {
	return (
		<div className={`${isOpen ? "" : "hidden"} fixed top-0 left-0 w-screen h-screen z-100`}>
			<ModalOverlay onClick={onClose} />
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
				<div className="relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl z-10 transition-all sm:my-8 align-middle sm:max-w-prose sm:w-full sm:p-6">
					<button
						type="button"
						onClick={onClose}
						className="absolute group top-0 right-0 border-none bg-none w-12 h-12 text-main-400 cursor-pointer"
					>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="far"
							data-icon="times"
							className="h-10 w-10 transition-transform ease-in transform group-hover:rotate-180"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
						>
							<path
								fill="currentColor"
								d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
							></path>
						</svg>
					</button>
					{children}
				</div>
			</div>
		</div>
	);
}
