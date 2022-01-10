import Link from "next/link";
import { DelimiterWide, ProfileImage } from "@src/atoms";
import { ChangePassword } from "@src/organisms";
import icon from "@assets/img/hooli-brands.svg";

export function ProfilePopup({ email, img }) {
	return (
		<div className="group px-7">
			<div className="relative inline-block md:flex space-x-2 items-center justify-end md:flex-1 lg:w-0">
				<Link href="/profil">
					<a>
						<ProfileImage variant="medium" />
					</a>
				</Link>
				<div
					className="hidden absolute origin-top-left top-14 right-0 mt-2 w-80 h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  divide-y divide-gray-100 focus:outline-none group-hover:block "
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabIndex="-1"
					translate="yes"
				>
					<div className="flex flex-col gap-2 justify-center items-center mt-3">
						<div className="flex flex-col items-center ">
							<Link href="/profil">
								<a>
									<ProfileImage variant="medium" />
								</a>
							</Link>
							<p className="text-sm font-medium text-gray-900 truncate" role="none">
								{email}
							</p>
						</div>
						<DelimiterWide />
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							<Link href="/profil">Upravit Profil</Link>
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							<Link href="/profil">Změnit účet</Link>
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							<ChangePassword />
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							<Link href="/profil">Nastavení</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

ProfilePopup.defaultProps = {
	img: icon,
	username: "johndoe",
	email: "johndoe@gmail.com",
};
