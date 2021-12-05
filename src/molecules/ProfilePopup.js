import { useState } from "react";
import Link from "next/link";
import { ProfileImage, ButtonLink } from "@src/atoms";
import { Modal, InputWrapper, ChangePassword } from "@src/molecules";
import icon from "@assets/img/hooli-brands.svg";

export function ProfilePopup({ email, img }) {
	const [modalPopped, setModalPopped] = useState(false);
	return (
		<div className="group px-7">
			<div className=" relative inline-block md:flex space-x-2 items-center justify-end md:flex-1 lg:w-0">
				<ProfileImage variant="medium" img={img} />

				<div
					className="hidden absolute origin-top-left top-14 right-0 mt-2 w-56 rounded-mdshadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none group-hover:block"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
					translate="yes"
				>
					<div className="px-4 py-3" role="none">
						<div className="self-center">
							<ProfileImage variant="small" img={img} />
						</div>
						<p className="text-sm font-medium text-gray-900 truncate" role="none">
							{email}
						</p>
					</div>
					<div className="py-1 " role="none">
						{/* <a
							href="#"
							className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50"
							role="menuitem"
							tabindex="-1"
							id="menu-item-0"
						>
							Zobrazit profil
						</a> */}
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							<Link href="/profil" passHref>
								Upravit Profil
							</Link>
						</div>

						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							<Link href="/profil" passHref>
								Změnit účet
							</Link>
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							{/* <a href="#" onClick={() => setModalPopped(true)}>
								Změnit heslo
							</a> */}
							<ChangePassword />
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
							<Link href="/profil" passHref>
								Nastavení
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <Modal isOpen={modalPopped} onClose={() => setModalPopped(!modalPopped)}>
				<ChangePassword />
			</Modal> */}
		</div>
	);
}

ProfilePopup.defaultProps = {
	img: icon,
	username: "johndoe",
	email: "johndoe@gmail.com",
};
