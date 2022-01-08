export function ClassicInput({ variant, id, placeholder }) {
	const handleVariant = (variant) => {
		switch (variant) {
			case "big":
				return "";
			case "small":
				return "";
			default:
				return "py-2 ring-main-500 focus:border-main-500 block w-full rounded-none rounded-l-md rounded-r-md pl-10 sm:text-sm border border-gray-300";
		}
	};
	return (
		<input
			type="text"
			name={id}
			id={id}
			className={handleVariant(variant)}
			placeholder={placeholder}
		/>
	);
}
