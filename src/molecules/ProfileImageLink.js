import Link from "next/link";
import { ProfileImage } from "@src/atoms";

export function ProfileImageLink({ linkHref = "/profil", variant }) {
	return (
		<Link href={linkHref} passHref>
			<a>
				<ProfileImage variant={variant} />
			</a>
		</Link>
	);
}
