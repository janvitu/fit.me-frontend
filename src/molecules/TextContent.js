import { H2, TextProse } from "@src/atoms";
export function TextContent({ headingText, children }) {
	return (
		<div className="relative px-4 sm:px-6 lg:px-8">
			<H2>{headingText}</H2>
			<TextProse>{children}</TextProse>
		</div>
	);
}
