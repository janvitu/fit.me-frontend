import React from "react";
import { CtaImage } from "@components/atoms";
import { CtaTextSection } from "@components/molecules";

export function CtaWithImage({ heading, description, linkText, linkUrl, imageSrc, imageAlt }) {
	return (
		<div className="bg-main-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
			<CtaTextSection
				heading={heading}
				description={description}
				linkText={linkText}
				linkUrl={linkUrl}
			/>
			<CtaImage src={imageSrc} alt={imageAlt} />
		</div>
	);
}
