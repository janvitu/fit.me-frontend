import Image from "next/image";
import { H3, ClassicInput } from "@src/atoms";

export function SearchBar({ name, id, placeholder, icon }) {
	return (
		<div className="pt-6">
			<H3 variant="small">{name}</H3>
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
					<ClassicInput variant="default" id={id} placeholder={placeholder} />
				</div>
			</div>
		</div>
	);
}
