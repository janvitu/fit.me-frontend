import { ArrowLink, IconWrapperMainBg } from "@src/atoms";
import hooliIcon from "@assets/img/hooli-brands.svg";
export function OverlappingCard({ header, text, linkText, linkHref, icon }) {
	return (
		<div className="flex flex-col bg-white rounded-2xl shadow-xl">
			<div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
				<div className="absolute inline-block top-0 transform -translate-y-1/2">
					<IconWrapperMainBg>
						<img src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
					</IconWrapperMainBg>
				</div>
				<h3 className="text-xl font-medium text-gray-900">{header}</h3>
				<p className="mt-4 text-base text-gray-500">{text}</p>
			</div>
			<div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
				<ArrowLink href={linkHref}>{linkText}</ArrowLink>
			</div>
		</div>
	);
}

OverlappingCard.defaultProps = {
	header: "Header",
	text: "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
	icon: {
		src: `${hooliIcon.src}`,
		alt: "alt",
		width: "24",
		height: "24",
	},
	iconAlt: "Icon",
	linkHref: "#",
	linkText: "Sample text",
};
