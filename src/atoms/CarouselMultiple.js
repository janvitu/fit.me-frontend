import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Controller } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
SwiperCore.use([Pagination, Navigation, Controller]);

export function CarouselMultiple({ children, onPhotoClick }) {
	return (
		<Swiper
			modules={[Controller]}
			slidesPerView={3}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			centeredSlides={true}
			centeredSlidesBounds={true}
			centerInsufficientSlides={true}
			navigation={true}
		>
			{children.map((image, index) => (
				<SwiperSlide key={index}>
					<div
						onClick={(event) => onPhotoClick(event, index)}
						className="h-72 w-auto cursor-pointer"
					>
						<Image className="object-cover" layout="fill" src={image.src} alt={image.alt} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
