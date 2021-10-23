import { StaticSite } from "@components/templates";
import { HeadingText } from "@components/atoms";
import { SubheadingText } from "@components/atoms";
import { TopheadingText } from "@components/atoms";

export default function Partner() {
	return (
		<StaticSite>
			{/* "Staňte se naším partnerem" + CTA */}

			{/* Centered 2x2 grid "Co vám přinese partnerství" */}

			<div className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<TopheadingText>Benefity</TopheadingText>
						<HeadingText>Co vám přinese partnerství</HeadingText>
						<SubheadingText>
							Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
							cupiditate veritatis in accusamus quisquam.
						</SubheadingText>
					</div>

					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/globe-alt --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Možnost přístupu do administrátorské konzole
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/scale --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Propojení s vaším firemním účtem
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/lightning-bolt --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Vytváření události
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/annotation --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Možnost zasílat notifikací vašim zákazníkům
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>

			{/* "Co znamená být naším partnerem" */}

			{/* "Jednoduchá administrátorská konzole" */}

			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="bg-main-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
						<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
							<div className="lg:self-center">
								<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
									<span className="block">Jednoduchá Administrátorská konzole.</span>
								</h2>
								<p className="mt-4 text-lg leading-6 text-main-200">
									Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada
									adipiscing sagittis vel nulla nec.
								</p>
								<a
									href="#"
									className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-main-600 hover:bg-main-50"
								>
									Live demo
								</a>
							</div>
						</div>
						<div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
							<img
								className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
								src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
								alt="App screenshot"
							/>
						</div>
					</div>
				</div>
			</div>
		</StaticSite>
	);
}
