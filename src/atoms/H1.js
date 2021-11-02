export function H1({ children }) {
	return (
		<h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">{children}</h1>
	);
}

H1.defaultProps = {
	children: "Heading text",
};
