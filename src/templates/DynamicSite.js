import { NavBarApp } from "@src/organisms";

export function DynamicSite({ children }) {
	return (
		<>
			<NavBarApp />
			{children}
		</>
	);
}
