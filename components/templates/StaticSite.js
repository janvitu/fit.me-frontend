import { NavBar } from "@components/organisms";

export function StaticSite({ children }) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
