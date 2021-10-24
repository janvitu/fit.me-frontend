import React from "react";

export function PageSection({ children }) {
	return (
		<div className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
		</div>
	);
}