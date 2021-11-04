import { CardsGrid, H2, H1, HeadingWrapper } from "@src/atoms";
import { PlaceCard } from "@src/molecules";

export default function Places() {
	return (
		<>
			<div className="bg-white overflow-hidden shadow rounded-lg pt-20 mb-10">
				<div className="px-4  sm:px-32 ">
					<HeadingWrapper>
						<H2 variant="big">Sportoviště</H2>
					</HeadingWrapper>
				</div>

				<div className="px-4 sm:px-32 ">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 pt-6">
						Zadej adresu / Hledat sportoviště
					</label>
					<div className="mt-1 flex rounded-md shadow-sm">
						<div className="relative flex items-stretch flex-grow focus-within:z-10">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA00lEQVQokaXSPU5CQRTF8R+yBQMBCmNFYwOhh9YF2OouYAsUuAgTE9gBO6DBxhUYG4x5pZ2VxdxnyPPNI8HT3MydnP8988E/1KrpdXEb9RPbqH/UroAWeI71N0Z4jL1dU4oF9uhX+gO8YJ4zdlHUGI8BBTp1se+iPmXMXxhL8V/L5kXUHt5zsUJv1WSl+QNXJ8zXONRtlGceZIzDGHCZI8+lW60ChtI5V02xWgEosMYSm5i4kj7KrAlAeo576d0fjqJOAzA9BcipBEzOBUxwc675Vz9TjCH7ON3ppAAAAABJRU5ErkJggg==" />
							</div>
							<input
								type="email"
								name="email"
								id="email"
								className="focus:ring-main-500 focus:border-main-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
								placeholder="Biskupocova 20 / ABC Sportoviště"
							/>
						</div>
						<button
							type="button"
							className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500"
						>
							<svg
								className="h-5 w-5 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
							</svg>
							<span>Filtr</span>
						</button>
					</div>
				</div>
			</div>

			{/* Places Cards */}
			<section className="mx-24">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
					<PlaceCard />
				</div>
			</section>
		</>
	);
}
