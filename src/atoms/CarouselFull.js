import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Controller } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
SwiperCore.use([Pagination, Navigation, Controller]);

export function CarouselFull({ children, index }) {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			initialSlide={index}
		>
			{children.map((image, index) => (
				<SwiperSlide key={index}>
					<div className=" h-screen80 w-auto">
						<Image
							className="object-contain h-full w-full"
							layout="fill"
							src={image.src}
							alt={image.alt}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
