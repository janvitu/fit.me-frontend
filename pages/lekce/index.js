import { H1, H3, XlWrapper, ButtonFilter } from "@src/atoms";
import { Filter, Sorter, SearchBar } from "@src/molecules";
import { EventsList } from "@src/templates";
import { DynamicSite } from "@src/templates/DynamicSite";
import { useState } from "react";
import searchIcon from "@assets/img/icons8-search.svg";

export default function Events() {
	const [filters, setFilters] = useState({
		tags: [],
		order: "",
	});

	return (
		<DynamicSite>
			<div className="bg-white shadow mb-10 z-100">
				<XlWrapper>
					<H1>Lekce</H1>
					<div>
						<SearchBar
							name="Hledej lekci"
							id="address"
							placeholder="U Jindřišské věže 23 / Praha / XFitness"
						/>
						<div className="mt-5 flex space-x-10">
							<div className="max-w-xs">
								<H3 variant="small">Filtr: </H3>

								<div className="flex flex-col gap-y-5">
									<Filter name="Tagy" filters={filters} setFilters={(val) => setFilters(val)} />

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
					<EventsList filters={filters} />
				</XlWrapper>
			</section>
		</DynamicSite>
	);
}
