import React from "react";

export function HeadingText({ children }) {
	return (
		<p className="text-3xl font-extrabold sm:text-4xl tracking-tight mt-2 leading-8 text-gray-900">
			{children}
		</p>
	);
}
