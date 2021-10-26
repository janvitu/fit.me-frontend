import { IconWrapperMainBg } from "@components/atoms";

export function OverlappingCard({ header, text, linkText, svgVector }) {
	return (
		<div className="flex flex-col bg-white rounded-2xl shadow-xl">
			<div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
				<div className="absolute inline-block top-0 transform -translate-y-1/2">
					<IconWrapperMainBg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							></path>
						</svg>
					</IconWrapperMainBg>
				</div>
				<h3 className="text-xl font-medium text-gray-900">{header}</h3>
				<p className="mt-4 text-base text-gray-500">{text}</p>
			</div>
			<div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
				<a href="#" className="text-base font-medium text-main-700 hover:text-main-600">
					{linkText}
					<span aria-hidden="true"> &rarr;</span>
				</a>
			</div>
		</div>
	);
}
