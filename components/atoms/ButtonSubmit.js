export function ButtonSubmit() {
	return (
		<div className="rounded-md shadow">
			<button
				type="submit"
				className="flex items-center justify-center min-w-[10ch] border text-base font-medium rounded-md border-transparent text-black bg-main-400 hover:bg-main-600"
			>
				{children}
			</button>
		</div>
	);
}
