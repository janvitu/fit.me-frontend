export function OverlappingCard({header, text, linkText, svgVector}) {
	return (

<div className="flex flex-col bg-white rounded-2xl shadow-xl">
<div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
    <div className="absolute top-0 p-5 inline-block bg-main-400 rounded-xl shadow-lg transform -translate-y-1/2">
        {/* <!-- Heroicon name: outline/phone --> */}
        <svg
										className="h-6 w-6 text-white"
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
											d={svgVector}
										/>
									</svg>
    </div>
    <h3 className="text-xl font-medium text-gray-900">{header}</h3>
    <p className="mt-4 text-base text-gray-500">
        {text}
    </p>
</div>
<div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
    <a href="#" className="text-base font-medium text-main-700 hover:text-main-600">
        {linkText}<span aria-hidden="true"> &rarr;</span>
    </a>
</div>
</div>
    );
    }