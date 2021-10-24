import { StaticSite } from "@components/templates";
import { PartnerTemplate } from "@components/templates";

const descriptionList = [
	{
		term: "Možnost přístupu do administrátorské konzole",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		svgDraw:
			"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
	},
	{
		term: "Propojení s vaším firemním účtem",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		svgDraw:
			"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
	},
	{
		term: "Vytváření události",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		svgDraw: "M13 10V3L4 14h7v7l9-11h-7z",
	},
	{
		term: "Možnost zasílat notifikací vašim zákazníkům",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		svgDraw:
			"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
	},
];

export default function Partner() {
	return (
		<StaticSite>
			<PartnerTemplate
				topheadingText="Benefity"
				headingText="Co vám přinese partnerství"
				subheadingText="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
							cupiditate veritatis in accusamus quisquam."
				descriptionList={descriptionList}
				ctaHeading="Jednoduchá Administrátorská konzole."
				ctaDescription="Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
				sagittis vel nulla nec."
				ctaLinkText="Live demo"
				ctaLinkUrl="#"
				ctaImageSrc="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
				ctaImageAlt="App screenshot"
			/>
		</StaticSite>
	);
}
