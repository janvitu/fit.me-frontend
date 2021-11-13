import Image from "next/image";

export function AvatarImg({ src, alt, variant, ...rest }) {
	return (
		<Image
			src={src}
			alt={alt}
			width={variant === "small" ? "32px" : "64px"}
			height={variant === "small" ? "32px" : "64px"}
			className={rest.className}
		/>
	);
}
