import { FooterLink } from "@components/atoms";

export function FooterLinksWrapper({ routes }) {
	return (
		<ul className="flex flex-row flex-wrap gap-6 justify-center">
			{routes.map(({ name, path, text }) => (
				<li key={name}>
					<FooterLink href={path}>{text}</FooterLink>
				</li>
			))}
		</ul>
	);
}
