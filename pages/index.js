import { ButtonLinkFilledBase, ButtonLinkFilledBig } from "@components/atoms";
import { StaticSite } from "@components/templates";

export default function Home() {
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
					<slot>
						<h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
							<span className="block text-white">Text</span>
							<span className="block text-main-800">another text</span>
						</h1>

						<p className="mt-6 text-xl text-gray-100 max-w-3xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, similique
							placeat, sint, soluta saepe deserunt vitae sunt quia cupiditate praesentium porro
							earum reiciendis nihil dolorem. Ab dolores nemo sapiente doloribus?
						</p>
						<div className="mt-10 flex">
							<ButtonLinkFilledBig>Zjistit více</ButtonLinkFilledBig>
						</div>
					</slot>
				</div>
			</section>
			<section className="bg-gray-200">
				<div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 sm:px-6 md:px-8 flex items-center justify-between">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 ">
						<span className="block">No text provided</span>
						<span className="block text-red-800">Add text to right slot</span>
					</h2>
					<div className="mt-0 flex flex-shrink-0">
						<ButtonLinkFilledBase>Text</ButtonLinkFilledBase>
					</div>
				</div>
			</section>
		</StaticSite>
	);
}
