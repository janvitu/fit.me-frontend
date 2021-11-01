export function H1({ childner }) {
	return (
		<h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">{childner}</h1>
	);
}

H1.defaultProps = {
	childner: "Heading text",
};
