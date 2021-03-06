export function ReferenceCard({
	children,
	companyName,
	companyLogoSrc,
	refereeImgSrc,
	refereePosition,
	refereeName,
}) {
	return (
		<div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
			<blockquote className="relative bg-white rounded-lg shadow-lg">
				<div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
					<img src={companyLogoSrc} alt={companyName} className="h-8" />
					<div className="relative text-lg text-gray-700 mt-8">
						<svg
							className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
							fill="currentColor"
							viewBox="0 0 32 32"
							aria-hidden="true"
						>
							<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
						</svg>
						<p className="relative">{children} </p>
					</div>
				</div>
				<cite className="relative flex items-center sm:items-start bg-main-800 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
					<div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
						<img
							className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-main-800"
							src={refereeImgSrc}
							alt={refereeName}
							loading="lazy"
						/>
					</div>
					<span className="relative ml-4 text-gray-100 font-light leading-6 sm:ml-24 sm:pl-1">
						<p className="text-white sm:inline">
							<span className="font-bold">{refereeName}</span> {refereePosition} at{" "}
							<span className="font-bold">{companyName}</span>
						</p>
					</span>
				</cite>
			</blockquote>
		</div>
	);
}
