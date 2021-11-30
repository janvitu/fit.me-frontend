import { CarouselFull, CarouselMultiple, GridGallery, ModalWithClose } from "@src/atoms";
import { disableScroll, enableScroll } from "@src/utils/handleScroll";
import { useState, useEffect } from "react";

export function ResponsiveGallery({ children }) {
	const [galleryModal, setGalleryModal] = useState(false);
	const [swiperIndex, setSwiperIndex] = useState(0);

	useEffect(() => {
		if (galleryModal) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [galleryModal]);

	const onPhotoClick = (event, index) => {
		setSwiperIndex(index);
		setGalleryModal(true);
	};

	return (
		<>
			<div className="hidden md:block">
				<GridGallery onPhotoClick={onPhotoClick}>{children}</GridGallery>
			</div>
			<div className="md:hidden">
				<CarouselMultiple onPhotoClick={onPhotoClick}>{children}</CarouselMultiple>
			</div>
			{galleryModal && (
				<ModalWithClose closeModal={() => setGalleryModal(false)}>
					<CarouselFull index={swiperIndex}>{children}</CarouselFull>
				</ModalWithClose>
			)}
		</>
	);
}
