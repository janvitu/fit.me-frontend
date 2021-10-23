import React from "react";

export function CtaHeadingText({ children }) {
	return (
		<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
			<span className="block">{children}</span>
		</h2>
	);
}
