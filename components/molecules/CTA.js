import {
	ButtonLinkFilledBase,
} from "@components/atoms";

export function CTA({upperText, lowerText, buttonText}) {
	return (

<section className="bg-gray-200">
<div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 sm:px-6 md:px-8 flex items-center justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 ">
        <span className="block">{upperText}</span>
        <span className="block text-main-800">{lowerText}</span>
    </h2>
    <div className="mt-0 flex flex-shrink-0">
        <ButtonLinkFilledBase>{buttonText}</ButtonLinkFilledBase>
    </div>
</div>
</section>
    )
    }