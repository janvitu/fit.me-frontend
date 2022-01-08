import Image from "next/image";
import { H3, ClassicInput } from "@src/atoms";

export function SearchBar({ name, id, placeholder, icon }) {
	return (
		<div className="pt-6">
			<H3 variant="small">{name}</H3>
			<div className="mt-1 flex rounded-md shadow-sm">
				<div className="relative flex items-stretch flex-grow focus-within:z-10 ">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Image src={icon.src} alt="searchIcon" width={15} height={15} />
					</div>
					<ClassicInput variant="default" id={id} placeholder={placeholder} />
				</div>
			</div>
		</div>
	);
}
