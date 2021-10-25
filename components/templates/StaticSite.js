import { NavBar, Footer } from "@components/organisms";

export function StaticSite({ children }) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}
