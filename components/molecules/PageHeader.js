import React from "react";
import { HeadingText } from "@components/atoms";
import { SubheadingText } from "@components/atoms";
import { TopheadingText } from "@components/atoms";

export function PageHeader({ topheadingText, headingText, subheadingText }) {
	return (
		<div className="lg:text-center">
			<TopheadingText>Benefity</TopheadingText>
			<HeadingText>Co vám přinese partnerství</HeadingText>
			<SubheadingText>
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
				veritatis in accusamus quisquam.
			</SubheadingText>
		</div>
	);
}
