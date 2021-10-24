import { PageHeader } from "@components/molecules";
import { PageSection } from "@components/atoms";

export function AboutTemplate({ topheadingText, headingText, subheadingText }) {
	return (
		<>
			{/* Nadpis */}

			{/* "V čem jsme jiní" section */}

			{/* CTA: "Posuňte svůj workout na novou úroveň" */}

			{/* "Náš přístup" section */}
			<PageSection>
				<PageHeader
					topheadingText={topheadingText}
					headingText={headingText}
					subheadingText={subheadingText}
				/>
			</PageSection>
			{/* "Náš tým" section */}

			{/* "Píší o nás" section */}

			{/* "Kontaktujte nás" section */}

			{/* FAQ */}
		</>
	);
}
