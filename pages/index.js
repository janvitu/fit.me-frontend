import {
	BigH2,
	ButtonLinkFilledBase,
	ButtonLinkFilledBig,
	HeadingWrapper,
	MainH2,
	XlWrapper,
	StatItem,
	SvgIcon,
} from "@components/atoms";
import { ContactFooter } from "@components/organisms";
import { OverlappingCard } from "@components/molecules";
import { StaticSite } from "@components/templates";

export default function Home() {
	const myMap = () => {
		var mapProp = {
			center: new google.maps.LatLng(51.508742, -0.12085),
			zoom: 5,
		};
		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	};

	return (
		<StaticSite>
			<section className="relative h-screen w-screen px-4 sm:px-8 md:px-12 lg:px-[150px] py-12 lg:py-16">
				<div className="absolute inset-0 overflow-hidden">
					<img
						className="w-full object-cover blur-sm h-full"
						src="https://source.unsplash.com/random/?fitness"
						alt="fitness"
					/>
					<div className="absolute bg-black bg-opacity-60 inset-0" aria-hidden="true" />
				</div>
				<div className="relative flex flex-col h-full justify-center text-white max-w-7xl">
					<h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
						<span className="block text-white">Text</span>
						<span className="block text-main-800">another text</span>
					</h1>

					<p className="mt-6 text-xl text-gray-100 max-w-3xl">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, similique placeat,
						sint, soluta saepe deserunt vitae sunt quia cupiditate praesentium porro earum
						reiciendis nihil dolorem. Ab dolores nemo sapiente doloribus?
					</p>
					<div className="mt-10 flex">
						<ButtonLinkFilledBig>Zjistit více</ButtonLinkFilledBig>
					</div>
				</div>
			</section>

			{/* */}
			{/* "S ČÍM VÁM POMÁHÁME "White background with overlaping cards */}
			<div className="bg-white">
				{/* <!-- Header --> */}
				<div className="relative pb-32 bg-white-800">
					<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center">
						<BigH2>S čím vám pomáháme</BigH2>
						<p className="mt-6 max-w-3xl text-xl text-gray-600 text-center">
							Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.
							Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
						</p>
					</div>
				</div>

				{/* <!-- Overlapping cards --> */}
				<section
					className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
					aria-labelledby="contact-heading"
				>
					<h2 className="sr-only" id="contact-heading">
						Contact us
					</h2>
					<div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
						<OverlappingCard
							header="Cvičení"
							text="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
							linkText="Zaregistrujte se"
							svgVector="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>

						<OverlappingCard
							header="Plánování"
							text="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
							linkText="Zaregistrujte se"
							svgVector="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
						/>
						<OverlappingCard
							header="Doporučení"
							text="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
							linkText="Zaregistrujte se"
							svgVector="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
						/>
					</div>
				</section>
			</div>

			{/* "OUR PROCESS" */}
			<section className="relative">
				<div className="flex flex-col mx-auto lg:flex-row">
					<div className="relative px-4 mx-auto py-12 lg:py-16 lg:max-w-7xl lg:pl-6 lg:mr-auto">
						<div className="text-base max-w-prose mx-auto lg:max-w-lg lg:mr-0">
							<HeadingWrapper>
								<MainH2> Our Process</MainH2>
							</HeadingWrapper>
							<div className="mt-5 prose prose-red text-gray-500">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, excepturi tempore
									repudiandae nihil ipsam officiis dolor deleniti ex maiores dicta commodi magni
									sapiente vel id ipsum suscipit fugit, ea ducimus.
								</p>
								<h3>Some header</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla autem
									porro quod aliquam itaque a dolore delectus praesentium maxime!
								</p>
								<ul>
									<li>Lorem ipsum dolor sit.</li> <li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
								</ul>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, libero.</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 lg:h-auto flex items-center justify-center">
						<img
							className="h-56 w-full object-cover lg:h-full shadow-md"
							src="https://source.unsplash.com/random/?garden"
							alt=""
							loading="lazy"
						/>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-gray-200">
				<XlWrapper>
					<div className="flex items-center justify-between">
						<MainH2>
							<span className="block">Upper text</span>
							<span className="block text-main-800">Lower text</span>
						</MainH2>
						<div className="mt-0 flex flex-shrink-0">
							<ButtonLinkFilledBase>Button text</ButtonLinkFilledBase>
						</div>
					</div>
				</XlWrapper>
			</section>
			{/* STATS Split with Image */}
			<div className="relative bg-white">
				<div className="h-56 bg-main-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
					<img
						className="w-full h-full object-cover"
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
						alt="Support team"
					/>
				</div>
				<div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
					<div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
						<div>
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
								{/* <!-- Heroicon name: outline/users --> */}
								<SvgIcon svgVector="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
							</div>
						</div>
						<MainH2>Spolupracují s námi sportoviště z 10 měst</MainH2>
						<p className="mt-6 text-lg text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa.
							Nostrum consectetur sequi culpa doloribus omnis, molestiae esse placeat,
							exercitationem magnam quod molestias quia aspernatur deserunt voluptatibus.
						</p>
						<div className="mt-8 overflow-hidden">
							<dl className="-mx-8 -mt-8 flex flex-wrap">
								<StatItem indicatorText="Sportovišť" indicatorNumber="200 +" />
								<StatItem indicatorText="Spokojených uživatelů" indicatorNumber="30 000 +" />
								<StatItem indicatorText="Spálených kalorií" indicatorNumber="100 000+" />
							</dl>
						</div>
					</div>
				</div>
			</div>

			{/* "Chcete vědět s kým spolupracujeme?" Section */}
			<div className="bg-white overflow-hidden shadow rounded-lg pt-20">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
							Chcete vědět s kým spolupracujete? <br /> Podívejte se na mapu.
						</p>
					</div>
				</div>

				<div className="px-4  sm:px-64 ">
					{/* <!-- Content goes here --> */}
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
						Zadejte adresu / Hledat sportoviště
					</label>
					<div className="mt-1 flex rounded-md shadow-sm">
						<div className="relative flex items-stretch flex-grow focus-within:z-10">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								{/* <!-- Heroicon name: solid/users --> */}
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAA00lEQVQokaXSPU5CQRTF8R+yBQMBCmNFYwOhh9YF2OouYAsUuAgTE9gBO6DBxhUYG4x5pZ2VxdxnyPPNI8HT3MydnP8988E/1KrpdXEb9RPbqH/UroAWeI71N0Z4jL1dU4oF9uhX+gO8YJ4zdlHUGI8BBTp1se+iPmXMXxhL8V/L5kXUHt5zsUJv1WSl+QNXJ8zXONRtlGceZIzDGHCZI8+lW60ChtI5V02xWgEosMYSm5i4kj7KrAlAeo576d0fjqJOAzA9BcipBEzOBUxwc675Vz9TjCH7ON3ppAAAAABJRU5ErkJggg==" />
							</div>
							<input
								type="email"
								name="email"
								id="email"
								className="focus:ring-main-500 focus:border-main-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
								placeholder="Biskupocova 20 / ABC Sportoviště"
							/>
						</div>
						<button
							type="button"
							className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-main-500 focus:border-main-500"
						>
							<svg
								className="h-5 w-5 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
							</svg>
							<span>Filtr</span>
						</button>
					</div>
				</div>
				<div className="pl-64 py-5">
					{/* Ilustrativní obrázek není responzivní */}
					<img
						className="w-10/12 h-auto px-4 py-5 sm:p-6"
						src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
					/>
				</div>
			</div>
			<ContactFooter />
		</StaticSite>
	);
}
