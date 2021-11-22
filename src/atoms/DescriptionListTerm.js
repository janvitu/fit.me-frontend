export function DescriptionListTerm({ svgDraw, children }) {
	return (
		<dt>
			<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
				<svg
					className="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svgDraw} />
				</svg>
			</div>
			<p className="ml-16 text-lg leading-6 font-medium text-gray-900">{children}</p>
		</dt>
	);
}
