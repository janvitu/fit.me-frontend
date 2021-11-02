export function BigCardWithImage({ children, imageSrc, imageAlt }) {
	return (
		<div className="bg-main-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
			<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
				<div className="lg:self-center">{children}</div>
			</div>
			<div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
				<img
					className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
					src={imageSrc}
					alt={imageAlt}
				/>
			</div>
		</div>
	);
}
