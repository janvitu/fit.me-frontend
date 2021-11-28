import Image from "next/image";

export function GridGallery({ children, onPhotoClick }) {
	return (
		<div className="grid d:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row justify-items-center gap-6">
			{children.map((image, index) => (
				<div
					key={index}
					onClick={(event) => onPhotoClick(event, index)}
					className="w-auto cursor-pointer bg-white"
				>
					<Image
						className="object-cover transition hover:opacity-50"
						height="300"
						width="400"
						src={image.src}
						alt={image.alt}
					/>
				</div>
			))}
		</div>
	);
}
