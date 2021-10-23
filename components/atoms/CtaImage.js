import React from "react";

export function CtaImage({ src, alt }) {
	return (
		<div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
			<img
				className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
				src={src}
				alt={alt}
			/>
		</div>
	);
}
