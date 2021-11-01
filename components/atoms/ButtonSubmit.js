export function ButtonSubmit({ children }) {
	return (
		<button
			type="submit"
			className="flex items-center px-4 py-2 justify-center min-w-[10ch] border text-base font-medium rounded-md border-transparent text-black bg-main-400 hover:bg-main-600"
		>
			{children}
		</button>
	);
}
