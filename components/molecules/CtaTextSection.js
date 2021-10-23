import React from "react";
import { CtaDescriptionText, CtaHeadingText, CtaButtonLink } from "@components/atoms";

export function CtaTextSection({ heading, description, linkText, linkUrl }) {
	return (
		<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
			<div className="lg:self-center">
				<CtaHeadingText>{heading}</CtaHeadingText>
				<CtaDescriptionText>{description}</CtaDescriptionText>
				<CtaButtonLink href={linkUrl}>{linkText}</CtaButtonLink>
			</div>
		</div>
	);
}
