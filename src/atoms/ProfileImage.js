import Image from "next/image";
import icon from "@assets/img/hooli-brands.svg";
export function ProfileImage({ variant, img, className }) {
	const chooseVariant = (variant) => {
		let properties = {
			width: "",
			height: "",
			className: "bg-gray-300 rounded-full flex-shrink-0",
		};
		switch (variant) {
			case "small":
				properties.width = "40";
				properties.height = "40";
				properties.className = "bg-gray-300 rounded-full flex-shrink-0";
				return properties;
			case "medium":
				properties.width = "60";
				properties.height = "60";
				properties.className = "bg-gray-100 flex-shrink-0 mx-auto rounded-full";
				return properties;
			case "large":
				properties.width = "160";
				properties.height = "160";
				properties.className = "bg-gray-100 flex-shrink-0 mx-auto rounded-full";
				return properties;
		}
	};

	const imageVariant = chooseVariant(variant);

	return (
		<Image
			src={img?.location || icon.src}
			alt={img?.name || icon.alt}
			layout="fixed"
			width={imageVariant.width}
			height={imageVariant.height}
			className={imageVariant.className}
		/>
	);
}
