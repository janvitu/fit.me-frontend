import Link from "next/link";
import { DelimiterWide, ProfileImage } from "@src/atoms";
import { ChangePassword } from "@src/organisms";
import icon from "@assets/img/hooli-brands.svg";

export function ProfilePopup({ email, img, username, accounts }) {
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
						<div className="flex flex-col items-center">
							<Link href="/profil">
								<a>
									<ProfileImage variant="medium" />
								</a>
							</Link>
							<p className="text-xs font-light text-gray-600 truncate">
								{accounts.map((account) => {
									if (account.active) return account.username + " (" + account.type + ") ";
								})}
							</p>
							<p className="text-sm font-medium text-gray-900 truncate" role="none">
								{email}
							</p>
						</div>
						<div className="flex flex-col justify-center items-center border-t border-b w-full">
							{accounts.map((account, index) => {
								if (!account.active)
									return (
										<div
											key={index}
											className="flex flex-row w-full items-center justify-between  hover:cursor-pointer hover:bg-gray-50 px-4 py-3 gap-4"
										>
											<div className="flex flex-row  items-center justify-evenly gap-2">
												<ProfileImage variant="small" />
												<div className="flex flex-col">
													<a className="text-sm font-medium text-gray-900 ">{account.name}</a>
													<a className="text-xs font-light text-gray-600 ">@{account.username}</a>
												</div>
											</div>

											<a className="self-center text-xs font-light text-gray-600 ">
												{account.type}
											</a>
										</div>
									);
							})}

							<div className="flex flex-row w-full items-center justify-start hover:cursor-pointer hover:bg-gray-50 px-6 py-3 gap-4">
								<svg
									width="24"
									height="20"
									aria-hidden="true"
									focusable="false"
									data-prefix="fat"
									data-icon="user-plus"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
								>
									<path
										fill="currentColor"
										d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 16c61.76 0 112 50.24 112 112S285.8 240 224 240S112 189.8 112 128S162.2 16 224 16zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 496H34.67C24.37 496 16 487.6 16 477.3C16 390.6 86.58 320 173.3 320h101.3C361.4 320 432 390.6 432 477.3C432 487.6 423.6 496 413.3 496zM632 216h-80v-80C552 131.6 548.4 128 544 128s-8 3.594-8 8v80h-80C451.6 216 448 219.6 448 224s3.594 8 8 8h80v80C536 316.4 539.6 320 544 320s8-3.594 8-8v-80h80C636.4 232 640 228.4 640 224S636.4 216 632 216z"
									></path>
								</svg>
								<a className="text-gray-700 text-sm">Přidání dalšího účtu</a>
							</div>
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 w-full text-center">
							<Link href="/profil">Upravit Profil</Link>
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 w-full text-center">
							<ChangePassword />
						</div>
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 w-full text-center">
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
	accounts: [
		{
			username: "johndoe",
			name: "John Doe",
			img: icon,
			type: "Sportovec",
			active: true,
		},
		{
			username: "xfitness",
			name: "XFitness",
			img: icon,
			type: "Sportoviště",
			active: false,
		},
	],
};
