export function CardInputWrapper({ children }) {
	return (
		<div className="mt-5 md:mt-0 md:col-span-2">
			<div className="shadow sm:rounded-md sm:overflow-hidden">
				<div className="px-4 py-5 bg-white space-y-6 sm:p-6">{children}</div>
			</div>
		</div>
	);
}
