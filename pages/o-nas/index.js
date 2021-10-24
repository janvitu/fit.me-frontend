import { StaticSite, AboutTemplate } from "@components/templates";

export default function About() {
	return (
		<StaticSite>
			<AboutTemplate
				topheadingText="Spolupráce"
				headingText="Náš přístup"
				subheadingText="Start building for free, then add a site plan to go live. Account plans unlock
				additional features."
			/>
		</StaticSite>
	);
}
