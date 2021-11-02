import Link from "next/link";

export function FooterLink({ href, children }) {
	return (
		<Link href={href} passHref>
			<a className="relative transition-color ease-in-out after:absolute after:bottom-0 after:h-px after:w-0 after:left-1/2 after:bg-white after:transition-all hover:after:left-0 hover:after:right-0 hover:after:w-full">
				{children}
			</a>
		</Link>
	);
}
