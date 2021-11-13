import { NavBarApp, FooterApp } from "@src/organisms";

export function DynamicSite({ children }) {
	return (
		<>
			<NavBarApp />
			{children}
			<FooterApp />
		</>
	);
}
