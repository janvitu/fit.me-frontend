import { NavBarStatic, Footer } from "@src/organisms";

export function StaticSite({ children }) {
	return (
		<>
			<NavBarStatic />
			{children}
			<Footer />
		</>
	);
}
