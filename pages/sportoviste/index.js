import { H1, H3, XlWrapper, Filter, SmWrapper } from "@src/atoms";
import { PlacesList } from "@src/organisms";
import { DynamicSite } from "@src/templates/DynamicSite";
import { useState } from "react";

export default function Places() {
	const [filter, setFilter] = useState();

	return (
		<DynamicSite>
			<div className="bg-white shadow rounded-lg pt-20 mb-10 z-100">
				<XlWrapper>
					<H1>Sportoviště</H1>

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 pt-6">
							Zadej adresu / Hledat sportoviště
						</label>
						<div className="mt-1 flex rounded-md shadow-sm">
							<div className="relative flex items-stretch flex-grow focus-within:z-10">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA00lEQVQokaXSPU5CQRTF8R+yBQMBCmNFYwOhh9YF2OouYAsUuAgTE9gBO6DBxhUYG4x5pZ2VxdxnyPPNI8HT3MydnP8988E/1KrpdXEb9RPbqH/UroAWeI71N0Z4jL1dU4oF9uhX+gO8YJ4zdlHUGI8BBTp1se+iPmXMXxhL8V/L5kXUHt5zsUJv1WSl+QNXJ8zXONRtlGceZIzDGHCZI8+lW60ChtI5V02xWgEosMYSm5i4kj7KrAlAeo576d0fjqJOAzA9BcipBEzOBUxwc675Vz9TjCH7ON3ppAAAAABJRU5ErkJggg==" />
								</div>
								<input
									type="text"
									name="adress"
									id="adress"
									className="ring-main-500 focus:border-main-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border border-gray-300"
									placeholder="Biskupocova 20 / ABC Sportoviště"
								/>
							</div>
						</div>
						<div className="mt-5">
							<H3 variant="small">Filtr: </H3>
							<Filter selectedTag={(val) => setFilter(val)} />
						</div>
					</div>
				</XlWrapper>
			</div>
			<section className="mx-auto">
				<XlWrapper>
					<PlacesList
						// places={places}
						filter={filter}
					/>
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
