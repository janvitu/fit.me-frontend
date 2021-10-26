export function StatsWithImg({imgSrc, imgAlt, svgVector, headerText, descriptionText, firstSubtitle, secondSubtitle, thirdSubtitle, firstIndicator, secondIndicator, thirdIndicator}) {
	return (
<div className="relative bg-white">
				<div className="h-56 bg-main-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
					<img
						className="w-full h-full object-cover"
						src={imgSrc}
						alt={imgAlt}
					/>
				</div>
				<div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
					<div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
						<div>
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
								{/* <!-- Heroicon name: outline/users --> */}
								<svg
									className="h-6 w-6"
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
						</div>
						<h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
							{headerText}
						</h2>
						<p className="mt-6 text-lg text-gray-500">
						    {descriptionText}
						</p>
						<div className="mt-8 overflow-hidden">
							<dl className="-mx-8 -mt-8 flex flex-wrap">
								<div className="flex flex-col px-8 pt-8">
									<dt className="order-2 text-base font-medium text-gray-500">{firstSubtitle}</dt>
									<dd className="order-1 text-2xl font-extrabold text-main-600 sm:text-3xl">
										{firstIndicator}
									</dd>
								</div>
								<div className="flex flex-col px-8 pt-8">
									<dt className="order-2 text-base font-medium text-gray-500">
										{secondSubtitle}
									</dt>
									<dd className="order-1 text-2xl font-extrabold text-main-600 sm:text-3xl">
										{secondIndicator}
									</dd>
								</div>
								<div className="flex flex-col px-8 pt-8">
									<dt className="order-2 text-base font-medium text-gray-500">{thirdSubtitle}</dt>
									<dd className="order-1 text-2xl font-extrabold text-main-600 sm:text-3xl">
										{thirdIndicator}
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>

    )}