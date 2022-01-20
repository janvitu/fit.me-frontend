import { Tag, H3, DelimiterWide, ButtonSubmit, XlWrapper } from "@src/atoms";
import { parseDate, getTimePeriod } from "@src/utils/dateHandler";

export function EventProfileTemplate({ EventProfileData }) {
	return (
		<>
			<img
				className="h-48 w-full object-cover lg:h-72 "
				src={`https://paxjrxehftbgfclkcnoi.supabase.in/storage/v1/object/public/fitme-imgs/event/${EventProfileData.id}/cover_photo.jpg`}
				alt="cover"
			/>

			<XlWrapper>
				<div className="grid grid-cols-2 ">
					<div className="col-span-1 flex flex-col pl-8 pt-4 gap-4">
						<span className="text-xs text-gray-400">@{EventProfileData.sportsground.username}</span>
						<div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-2">
							{EventProfileData.tags.map((tag, index) => (
								<Tag name={tag.name} color={tag.color} key={index} />
							))}
						</div>
						<div className="flex flex-col ">
							<div className="mr-4 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3x">
								{EventProfileData.name}
							</div>
							<div className="flex flex-col sm:flex-row text-gray-500">
								<div className="text-sm">
									{parseDate(new Date(EventProfileData.datetime_from))}{" "}
								</div>
								<div className="text-sm hidden sm:block">&nbsp;|&nbsp;</div>
								<div className="text-sm font-normal">
									{getTimePeriod(
										new Date(EventProfileData.datetime_from),
										new Date(EventProfileData.datetime_to),
									)}
								</div>
							</div>
							<div className="text-gray-500 text-xs">
								Přihlášených: {EventProfileData.numOfRegistered}
							</div>
							<div className="text-gray-500 text-xs">Náročnost: {EventProfileData.difficulty}</div>
							<div className="mt-5">
								<H3 variant="small">Obsah tréninku</H3>
								<DelimiterWide />
								<ul
									role="list"
									className="mt-3 mb-3 grid grid-cols-1 sm:gap-x-2 sm:gap-y-1 sm:grid-cols-2"
								>
									{EventProfileData.exercises.map((excercise, index) => {
										return (
											<li className="col-span-1 flex shadow-sm rounded-md " key={index}>
												<div className="flex-shrink-0 flex items-center justify-center w-12 bg-main-400 text-white text-sm font-medium rounded-l-md">
													<svg
														width="21"
														height="14"
														viewBox="0 0 21 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1.5 5H19.5M1.5 9H19.5M10.5 5V13M3.5 13H17.5C18.6046 13 19.5 12.1046 19.5 11V3C19.5 1.89543 18.6046 1 17.5 1H3.5C2.39543 1 1.5 1.89543 1.5 3V11C1.5 12.1046 2.39543 13 3.5 13Z"
															stroke="white"
															strokeWidth="2"
														/>
													</svg>
												</div>
												<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md pl-3 pt-3 pr-3 pb-3 ">
													<p className="text-gray-900 font-medium ">{excercise.name}</p>
												</div>
											</li>
										);
									})}
								</ul>
								<DelimiterWide />
								<div className="mt-3">
									<ButtonSubmit>Zúčastnit se</ButtonSubmit>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-1 flex flex-col mt-8 ml-16 ">
						<H3>Účastníci</H3>
						<ul
							role="list"
							className="grid grid-cols-1 gap-y-2 sm:gap-y-4 overflow-y-scroll divide-y divide-gray-200 max-h-64"
						>
							{EventProfileData.sportsmans.map((sportsman, index) => {
								return (
									<li className="py-1 flex" key={index}>
										<img
											className="h-10 w-10 rounded-full"
											src={sportsman.profile_photo.location}
											alt=""
										/>
										<div className="ml-3">
											<p className="text-sm font-medium text-gray-900">{sportsman.name}</p>
											<p className="text-sm text-gray-500">@{sportsman.username}</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</XlWrapper>
		</>
	);
}
