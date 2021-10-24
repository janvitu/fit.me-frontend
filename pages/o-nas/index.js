import { BigH3, HeadingWrapper, SmallH2 } from "@components/atoms";
import { StaticSite } from "@components/templates";

import hooli from "@assets/img/hooli-brands.svg";

export default function About() {
	return (
		<StaticSite>
			{/* HERO */}
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
							O Nás
						</h1>
						<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
							Tvoříme most mezi <span className="text-main-600">sportovišti</span> a
							<span className="text-main-600"> sportovci</span>
						</p>
					</div>
				</div>
			</div>
			{/* "V čem jsme jiní" section */}
			<section className="py-16 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
					<HeadingWrapper>
						<SmallH2>Mise</SmallH2>
						<BigH3>V čem jsme jiní</BigH3>
					</HeadingWrapper>

					<div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
						<p className="text-lg text-gray-500">
							Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
							consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
							Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames
							senectus vitae.
						</p>
					</div>
					<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
						<div className="relative z-10">
							<div className="prose prose-main text-gray-500 mx-auto lg:max-w-none">
								<p>
									Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem
									nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet
									quam urna.
								</p>
								<ul>
									<li>Quis elit egestas venenatis mattis dignissim.</li>
									<li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
									<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
								</ul>
								<p>
									Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
									Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum
									consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
									fermentum lacus in. Viverra.
								</p>
								<h3>We’re here to help</h3>
								<p>
									Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in
									volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.
									Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec
									ultricies non morbi. Mi a platea auctor mi.
								</p>
							</div>
						</div>
						<div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
							<blockquote className="relative bg-white rounded-lg shadow-lg">
								<div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
									<img
										src="/_app/assets/tridora-group.5d10eaba.svg"
										alt="Tridora group"
										className="h-8"
									/>
									<div className="relative text-lg text-gray-700 mt-8">
										<svg
											className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
											fill="currentColor"
											viewBox="0 0 32 32"
											aria-hidden="true"
										>
											<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
										</svg>
										<p className="relative">
											Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium
											in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis
											amet. Laoreet sem est phasellus eu proin massa, lectus.
										</p>
									</div>
								</div>
								<cite className="relative flex items-center sm:items-start bg-main-800 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
									<div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
										<img
											className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-main-800"
											src="https://source.unsplash.com/random/48x48/?male,face"
											alt=""
											loading="lazy"
										/>
									</div>
									<span className="relative ml-4 text-gray-100 font-light leading-6 sm:ml-24 sm:pl-1">
										<p className="text-white font-bold sm:inline">John Doe</p>
										<p className="sm:inline">
											CEO at <span className="font-bold">Fit.Me</span>
										</p>
									</span>
								</cite>
							</blockquote>
						</div>
					</div>
				</div>
			</section>
			{/* CTA: "Posuňte svůj workout na novou úroveň" */}

			{/* "Náš přístup" section */}
			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base font-semibold text-main-600 tracking-wide uppercase">
							Spolupráce
						</h2>
						<p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
							Náš přístup
						</p>
						<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
							Start building for free, then add a site plan to go live. Account plans unlock
							additional features.
						</p>
					</div>
				</div>
			</div>

			{/* "Náš tým" section */}
			<section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<HeadingWrapper centered>
						<SmallH2>tým</SmallH2>
						<BigH3>Náš tým</BigH3>
					</HeadingWrapper>
					<ul className="space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 sm:gap-6 lg:gap-8">
						<li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
							<div className="space-y-6 xl:space-y-10">
								<img
									className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56"
									src="https://source.unsplash.com/random/?male,face"
									alt="Team Member"
								/>
								<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
									<div className="font-medium text-lg leading-6 space-y-1">
										<h3 className="text-white">Leonard Krasner</h3>
										<p className="text-main-800">Senior Designer</p>
									</div>
									<ul className="flex justify-center space-x-5">
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">Twitter</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
												</svg>
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">LinkedIn</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
														clipRule="evenodd"
													></path>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
							<div className="space-y-6 xl:space-y-10">
								<img
									className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56"
									src="https://source.unsplash.com/random/?male,face"
									alt="Team Member"
								/>
								<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
									<div className="font-medium text-lg leading-6 space-y-1">
										<h3 className="text-white">Leonard Krasner</h3>
										<p className="text-main-800">Senior Designer</p>
									</div>
									<ul className="flex justify-center space-x-5">
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">Twitter</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
												</svg>
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">LinkedIn</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
														clipRule="evenodd"
													></path>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
							<div className="space-y-6 xl:space-y-10">
								<img
									className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56"
									src="https://source.unsplash.com/random/?male,face"
									alt="Team Member"
								/>
								<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
									<div className="font-medium text-lg leading-6 space-y-1">
										<h3 className="text-white">Leonard Krasner</h3>
										<p className="text-main-800">Senior Designer</p>
									</div>
									<ul className="flex justify-center space-x-5">
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">Twitter</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
												</svg>
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">LinkedIn</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
														clipRule="evenodd"
													></path>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
							<div className="space-y-6 xl:space-y-10">
								<img
									className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56"
									src="https://source.unsplash.com/random/?male,face"
									alt="Team Member"
								/>
								<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
									<div className="font-medium text-lg leading-6 space-y-1">
										<h3 className="text-white">Leonard Krasner</h3>
										<p className="text-main-800">Senior Designer</p>
									</div>
									<ul className="flex justify-center space-x-5">
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">Twitter</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
												</svg>
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">LinkedIn</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
														clipRule="evenodd"
													></path>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
							<div className="space-y-6 xl:space-y-10">
								<img
									className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56"
									src="https://source.unsplash.com/random/?male,face"
									alt="Team Member"
								/>
								<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
									<div className="font-medium text-lg leading-6 space-y-1">
										<h3 className="text-white">Leonard Krasner</h3>
										<p className="text-main-800">Senior Designer</p>
									</div>
									<ul className="flex justify-center space-x-5">
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">Twitter</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
												</svg>
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">LinkedIn</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
														clipRule="evenodd"
													></path>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
							<div className="space-y-6 xl:space-y-10">
								<img
									className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56"
									src="https://source.unsplash.com/random/?male,face"
									alt="Team Member"
								/>
								<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
									<div className="font-medium text-lg leading-6 space-y-1">
										<h3 className="text-white">Leonard Krasner</h3>
										<p className="text-main-800">Senior Designer</p>
									</div>
									<ul className="flex justify-center space-x-5">
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">Twitter</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
												</svg>
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-gray-300">
												<span className="sr-only">LinkedIn</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
														clipRule="evenodd"
													></path>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

			{/* "Píší o nás" section */}
			<section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative">
						<img className="mx-auto h-8" src={hooli.src} alt="Hooli" />
						<blockquote className="mt-10">
							<div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
								<p>
									&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
									voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et
									corporis.&rdquo;
								</p>
							</div>
							<footer className="mt-8">
								<div className="md:flex md:items-center md:justify-center">
									<div className="md:flex-shrink-0">
										<img
											className="mx-auto h-10 w-10 rounded-full"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</div>
									<div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
										<div className="text-base font-medium text-gray-900">Gavin Belson</div>

										<svg
											className="hidden md:block mx-1 h-5 w-5 text-main-600"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M11 0h3L9 20H6l5-20z" />
										</svg>

										<div className="text-base font-medium text-gray-500">ex CEO, Hooli</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>

			{/* "Kontaktujte nás" section */}

			{/* FAQ */}
		</StaticSite>
	);
}
