import { ModalOverlay, Tag, H3, DelimiterWide, ButtonSubmit } from "@src/atoms";

export function ModalEvent({
	isOpen,
	onClose,
	id,
	date,
	time,
	name,
	rating,
	numOfRegistered,
	organizer,
	tags,
	img,
	difficulty,
	content,
	users,
}) {
	return (
		<div className={`${isOpen ? "" : "hidden"} fixed top-0 left-0 w-screen h-screen z-100`}>
			<ModalOverlay onClick={onClose} />
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
				<div className="relative bg-white rounded-lg  pb-4 overflow-hidden shadow-xl z-10 transition-all sm:my-8 align-middle sm:max-w-screen-md sm:w-full ">
					<div className="  grid grid-cols-2 ">
						<img
							className="h-32 w-full object-cover lg:h-48 col-span-2"
							src="https://source.unsplash.com/random/?workout"
							alt=""
						/>
						<div className="col-span-1 flex flex-col pl-8 pt-4 gap-2">
							<span className="text-xs text-gray-400">@{organizer}</span>
							<div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-2">
								{tags.map((tag, index) => (
									<Tag name={tag.name} color={tag.color} key={index} />
								))}
							</div>
							<div className="flex flex-col ">
								<div className="mr-4 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3x">
									{name}
								</div>
								<div className="flex flex-col sm:flex-row text-gray-500">
									<div className="text-sm">{date} </div>
									<div className="text-sm hidden sm:block">&nbsp;|&nbsp;</div>
									<div className="text-sm font-normal">{time}</div>
								</div>
								<div className="text-gray-500 text-xs">Přihlášených: {numOfRegistered}</div>
								<div className="text-gray-500 text-xs">Náročnost: {difficulty}</div>
								<div className="mt-5">
									<H3 variant="small">Obsah tréninku</H3>
									<DelimiterWide />
									<ul
										role="list"
										className="mt-3 mb-3 grid grid-cols-1 sm:gap-x-2 sm:gap-y-1 sm:grid-cols-2"
									>
										{content.map((excercise) => {
											return (
												<li className="col-span-1 flex shadow-sm rounded-md " key={excercise.id}>
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
								{users.map((user) => {
									return (
										<li className="py-1 flex" key={user.id}>
											<img className="h-10 w-10 rounded-full" src={user.img} alt="" />
											<div className="ml-3">
												<p className="text-sm font-medium text-gray-900">{user.name}</p>
												<p className="text-sm text-gray-500">{user.email}</p>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

ModalEvent.defaultProps = {
	content: [
		{
			id: 1,
			name: "Snatch",
		},
		{
			id: 2,
			name: "Pull ups",
		},
		{
			id: 3,
			name: "Squats",
		},
		{
			id: 4,
			name: "Dips",
		},
	],
	users: [
		{
			id: 1,
			name: "Calvin Hawkins",
			email: "calvin.hawkings@gmail.com",
			img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		{
			id: 2,
			name: "Calvin Hawkins",
			email: "calvin.hawkings@gmail.com",
			img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		{
			id: 3,
			name: "Calvin Hawkins",
			email: "calvin.hawkings@gmail.com",
			img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		{
			id: 4,
			name: "Calvin Hawkins",
			email: "calvin.hawkings@gmail.com",
			img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		{
			id: 5,
			name: "Calvin Hawkins",
			email: "calvin.hawkings@gmail.com",
			img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		{
			id: 6,
			name: "Calvin Hawkins",
			email: "calvin.hawkings@gmail.com",
			img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	],
};
