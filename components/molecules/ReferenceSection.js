export function ReferenceSection({
	children,
	companyName,
	companyLogoSrc,
	refereeImgSrc,
	refereePosition,
	refereeName,
}) {
	return (
		<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="relative">
				<img className="mx-auto h-8" src={companyLogoSrc} alt={companyName} />
				<blockquote className="mt-10">
					{children}
					<footer className="mt-8">
						<div className="md:flex md:items-center md:justify-center">
							<div className="md:flex-shrink-0">
								<img
									className="mx-auto h-10 w-10 rounded-full"
									src={refereeImgSrc}
									alt={refereeName}
								/>
							</div>
							<div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
								<div className="text-base font-medium text-gray-900">{refereeName}</div>

								<svg
									className="hidden md:block mx-1 h-5 w-5 text-main-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M11 0h3L9 20H6l5-20z" />
								</svg>

								<div className="text-base font-medium text-gray-500">
									{refereePosition}, {companyName}
								</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	);
}
