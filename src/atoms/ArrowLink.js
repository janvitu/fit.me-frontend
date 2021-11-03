import Link from "next/link";

export function ArrowLink({ children, href }) {
	return (
		<Link href={href} passHref>
			<a className="text-base font-medium text-main-700 hover:text-main-600">
				{children}
				<span aria-hidden="true"> &rarr;</span>
			</a>
		</Link>
	);
}
