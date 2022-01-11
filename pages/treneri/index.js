import Image from "next/image";

import { useState } from "react";
import { H3, H1, XlWrapper, ButtonFilter } from "@src/atoms";
import { Filter, Sorter } from "@src/molecules";
import { TrainersList } from "@src/organisms";
import { DynamicSite } from "@src/templates/DynamicSite";
import { gql, useQuery } from "@apollo/client";

const GET_COACHES = gql`
	query GetCoaches {
		getCoaches {
			id
			username
			name
			surname
			description
			specializations
			rating
		}
	}
`;

export default function Trainers() {
	const { loading, error, data } = useQuery(GET_COACHES);
	const [filters, setFilters] = useState({
		tags: [],
		order: "",
	});
	return (
		<DynamicSite>
			<div className="bg-white shadow pt-20 mb-10 z-100">
				<XlWrapper>
					<H1>Trenéři</H1>

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 pt-6">
							Hledej Trenéra
						</label>
						<div className="mt-1 flex rounded-md shadow-sm">
							<div className="relative flex items-stretch flex-grow focus-within:z-10 ">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Image
										height="15"
										width="15"
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA00lEQVQokaXSPU5CQRTF8R+yBQMBCmNFYwOhh9YF2OouYAsUuAgTE9gBO6DBxhUYG4x5pZ2VxdxnyPPNI8HT3MydnP8988E/1KrpdXEb9RPbqH/UroAWeI71N0Z4jL1dU4oF9uhX+gO8YJ4zdlHUGI8BBTp1se+iPmXMXxhL8V/L5kXUHt5zsUJv1WSl+QNXJ8zXONRtlGceZIzDGHCZI8+lW60ChtI5V02xWgEosMYSm5i4kj7KrAlAeo576d0fjqJOAzA9BcipBEzOBUxwc675Vz9TjCH7ON3ppAAAAABJRU5ErkJggg=="
										alt=""
									/>
								</div>
								<input
									type="text"
									name="adress"
									id="adress"
									className="py-2 ring-main-500 focus:border-main-500 block w-full rounded-none rounded-l-md rounded-r-md pl-10 sm:text-sm border border-gray-300"
									placeholder="Husinecká 19 / Praha / Robert Chott"
								/>
							</div>
						</div>
						<div className="mt-5 flex flex-wrap gap-x-10 gap-y-2 ">
							<div className="max-w-xs">
								<H3 variant="small">Filtr: </H3>
								<div className="flex flex-col gap-y-5">
									<Filter
										name="Tagy"
										// options={options}
										filters={filters}
										setFilters={(val) => setFilters(val)}
									/>
									<div className=" flex gap-x-3 gap-y-1 flex-wrap">
										{filters.tags.map((tag, index) => {
											return (
												<ButtonFilter
													name={tag}
													filters={filters}
													setFilters={setFilters}
													key={index}
												/>
											);
										})}
									</div>
								</div>
							</div>
							<div>
								<H3 variant="small">Seřadit dle hodnocení:</H3>
								<Sorter setFilters={setFilters} filters={filters} />
							</div>
						</div>
					</div>
				</XlWrapper>
			</div>

			<section className="mx-auto">
				<XlWrapper>
					{!loading && !error && <TrainersList trainers={data.getCoaches} filters={filters} />}
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
