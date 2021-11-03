import { XlWrapper, H2, DelimiterSmall } from "@src/atoms";
import { ContactCard } from "@src/molecules";

export function ContactFooter() {
	return (
		<section className="bg-white">
			<XlWrapper>
				<div className="divide-y-2 divide-gray-200">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<H2 variant="base">Kontaktujte nás</H2>
							<DelimiterSmall />
						</div>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
							<ContactCard
								name="Jan V."
								position="CEO"
								email="vitu.jan1@gmail.com"
								phone="+420 777 777"
							/>
							<ContactCard
								name="Jan V."
								position="CEO"
								email="vitu.jan1@gmail.com"
								phone="+420 777 777"
							/>
							<ContactCard
								name="Jan V."
								position="CEO"
								email="vitu.jan1@gmail.com"
								phone="+420 777 777"
							/>
							<ContactCard
								name="Jan V."
								position="CEO"
								email="vitu.jan1@gmail.com"
								phone="+420 777 777"
							/>
						</div>
					</div>
				</div>
			</XlWrapper>
		</section>
	);
}
