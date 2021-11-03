import { NavBar, Footer } from "@src/organisms";

export function StaticSite({ children }) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}
