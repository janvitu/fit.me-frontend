import Link from "next/link";
import { ButtonLinkFilledBase } from "@components/atoms";

export default function FourOhFour() {
	return (
		<div className="bg-white lg:px-8 md:grid md:place-items-center min-h-screen px-4 py-16 sm:px-6 sm:py-24">
			<div className="max-w-max mx-auto">
				<main className="sm:flex">
					<p className="font-extrabold sm:text-5xl text-4xl text-main-600">404</p>
					<div className="sm:ml-6">
						<div className="sm:border-gray-200 sm:border-l sm:pl-6">
							<h1 className="font-extrabold sm:text-5xl text-4xl text-gray-900 tracking-tight">
								Stránka nenalezena
							</h1>
							<p className="mt-1 text-base text-gray-500">
								Prosím zkontrolujet URL adresu a zkuste to znovu.
							</p>
						</div>
						<div className="flex mt-4 sm:border-l sm:border-transparent sm:pl-6 space-x-3">
							<ButtonLinkFilledBase href="/">Vrátit se na domovskou stránku</ButtonLinkFilledBase>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
