import React from "react";
import { HeadingText, SubheadingText, TopheadingText } from "@components/atoms";

export function PageHeader({ topheadingText, headingText, subheadingText }) {
	return (
		<div className="lg:text-center">
			<TopheadingText>{topheadingText}</TopheadingText>
			<HeadingText>{headingText}</HeadingText>
			<SubheadingText>{subheadingText}</SubheadingText>
		</div>
	);
}
