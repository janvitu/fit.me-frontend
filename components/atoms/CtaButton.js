import React from "react";

export default function CtaButton({ href, children }) {
	return (
		<a
			href={href}
			className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-main-600 hover:bg-main-50"
		>
			{children}
		</a>
	);
}
