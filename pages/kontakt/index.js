import { ContactForm } from "@src/organisms/ContactForm";
import { ContactFooter } from "@src/organisms";
import { StaticSite } from "@src/templates";
import { H1 } from "@src/atoms";

export default function Contact() {
	return (
		<StaticSite>
			<section className="lg:px-8 lg:py-16 px-4 py-12 relative sm:px-6">
				<div className="flex flex-col items-center">
					<H1>Kontaktujte nás</H1>
					<div className="bg-mainG h-2 mb-4 mt-2 rounded-full w-16"></div>
				</div>
				<div className="max-w-prose mt-4 mx-auto space-y-6 text-center">
					<p className="text-black">
						Máte dotaz nebo chcete vědět více o projektu?
						<span className="block font-bold">Napište nám!</span>
					</p>
					<div>
						<span className="block">+420 666 888 999</span>
						<span className="block">email@nekde.com</span>
					</div>
				</div>
			</section>
			<section className="lg:px-8 lg:py-16 px-4 py-12 relative sm:px-6">
				<div className="max-w-5xl mx-auto space-y-4">
					<header className="space-y-6">
						<h2 className="font-bold normal-case text-2xl"> Chcete se dozvědět více? </h2>
						<p>Napište nám a rádi vám poskytneme další informace.</p>
					</header>
					<main>
						<ContactForm />
					</main>
				</div>
			</section>
			<ContactFooter />
		</StaticSite>
	);
}
