import { PageHeader } from "@components/molecules";
import { PageSection } from "@components/atoms";
import { DescriptionList, CtaWithImage } from "@components/organisms";

export function PartnerTemplate({
	topheadingText,
	headingText,
	subheadingText,
	descriptionList,
	ctaHeading,
	ctaDescription,
	ctaLinkText,
	ctaLinkUrl,
	ctaImageSrc,
	ctaImageAlt,
}) {
	return (
		<>
			{/* "Staňte se naším partnerem" + CTA */}
			<PageSection>
				<PageHeader
					topheadingText={topheadingText}
					headingText={headingText}
					subheadingText={subheadingText}
				/>
				{/* Centered 2x2 grid "Co vám přinese partnerství" */}
				<DescriptionList list={descriptionList} />
			</PageSection>

			{/* "Co znamená být naším partnerem" */}

			{/* "Jednoduchá administrátorská konzole" */}
			<PageSection>
				<CtaWithImage
					heading={ctaHeading}
					description={ctaDescription}
					linkText={ctaLinkText}
					linkUrl={ctaLinkUrl}
					imageSrc={ctaImageSrc}
					imageAlt={ctaImageAlt}
				/>
			</PageSection>
		</>
	);
}
