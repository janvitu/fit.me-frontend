import { H1, H3, XlWrapper } from "@src/atoms";
import { Sorter, SearchBar } from "@src/molecules";
import { FilterWithTags } from "@src/organisms";

export function DynamicListHeader({ setFilters, filters, namePlural, nameAkuzativ, placeholder }) {
	return (
		<div className="bg-white shadow mb-10 z-100">
			<XlWrapper>
				<H1>{namePlural}</H1>
				<div>
					<SearchBar name={"Hledej " + nameAkuzativ} id="address" placeholder={placeholder} />
					<div className="mt-5 flex space-x-10">
						<div className="max-w-xs">
							<H3 variant="small">Filtr: </H3>
							<FilterWithTags filters={filters} setFilters={setFilters} />
						</div>
						<div>
							<H3 variant="small">Seřadit dle hodnocení:</H3>
							<Sorter setFilters={setFilters} filters={filters} />
						</div>
					</div>
				</div>
			</XlWrapper>
		</div>
	);
}
