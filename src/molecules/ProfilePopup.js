import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { ProfileImage } from "@src/atoms";
import { ChangePassword } from "@src/organisms";
import { UserContext } from "@src/utils/UserProvider";
import { derivateAccType } from "@src/utils/accountTypeFunctions";
import { AddNewAccount } from "./AddNewAccount";

export function ProfilePopup({ email, img, username }) {
	const [accounts, setAccounts] = useState([]);
	const { activeAcc, user, setActiveAcc } = useContext(UserContext);
	useEffect(() => {
		if (user) {
			const acc = [user.coach, user.sportsman, user.sportsground];
			if (activeAcc) {
				const acc2 = acc.filter((a) => a !== null);
				const result = acc2.filter(
					(a) => a["__typename"].toLowerCase() !== activeAcc.toLowerCase(),
				);
				setAccounts(result);
			}
		}
	}, [user, activeAcc]);

	return (
		<div className="group px-7">
			<div className="relative inline-block md:flex space-x-2 items-center justify-end md:flex-1 lg:w-0">
				<Link href="/profil">
					<a>
						<ProfileImage variant="medium" img={user?.[activeAcc].profile_photo} />
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
									<ProfileImage variant="medium" img={user?.[activeAcc].profile_photo} />
								</a>
							</Link>
							<p className="text-xs font-light text-gray-600 truncate">
								{user?.[activeAcc].username + " (" + derivateAccType(activeAcc) + ")"}
							</p>
							<p className="text-sm font-medium text-gray-900 truncate" role="none">
								{email}
							</p>
						</div>
						<div className="flex flex-col justify-center items-center border-t border-b w-full">
							{accounts &&
								accounts.map((account, index) => {
									if (account) {
										return (
											<div
												key={index}
												className="flex flex-row w-full items-center justify-between  hover:cursor-pointer hover:bg-gray-50 px-4 py-3 gap-4"
												onClick={() => setActiveAcc(account["__typename"].toLowerCase())}
											>
												<div className="flex flex-row  items-center justify-evenly gap-2">
													<ProfileImage variant="small" img={account.profile_photo} />
													<div className="flex flex-col">
														<a className="text-sm font-medium text-gray-900 ">{account.name}</a>
														<a className="text-xs font-light text-gray-600 ">@{account.username}</a>
													</div>
												</div>

												<a className="self-center text-xs font-light text-gray-600 ">
													{" (" + derivateAccType(account["__typename"].toLowerCase()) + ")"}
												</a>
											</div>
										);
									}
								})}

							<AddNewAccount />
						</div>
						{activeAcc == "sportsground" && (
							<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 w-full text-center">
								<Link href={`/sportoviste/${user.sportsground.username}/admin`}>
									Upravit Profil
								</Link>
							</div>
						)}
						{activeAcc == "coach" && (
							<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 w-full text-center">
								<Link href={`/treneri/${user.coach.username}/admin`}>Upravit Profil</Link>
							</div>
						)}
						<div className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 w-full text-center">
							<ChangePassword />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
