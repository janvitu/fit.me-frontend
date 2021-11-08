import { useState } from "react";

export function CopyItem({ value }) {
	const [copySuccess, setCopySuccess] = useState(false);

	const handleCopyClick = (e, value) => {
		e.preventDefault();
		navigator.clipboard.writeText(value);
		setCopySuccess(true);

		setTimeout(() => {
			setCopySuccess(false);
		}, 1000);
	};
	return (
		<div className="mt-1">
			<dd onClick={(e) => handleCopyClick(e, value)} className="group flex hover:cursor-pointer">
				<span>{value}</span>
				<div className="relative flex items-center">
					<div
						className={`absolute inset-x-0 bottom-full mb-1 flex justify-center  transition-transform duration-200 transform origin-bottom-center ${
							copySuccess ? "scale-100" : "scale-0"
						}`}
					>
						<span className="sr-only">Copy code</span>
						<span className="bg-gray-900 text-white rounded-md text-[0.625rem] leading-4 tracking-wide font-semibold uppercase py-1 px-3 filter drop-shadow-md">
							<svg
								width="16"
								height="6"
								viewBox="0 0 16 6"
								className="text-gray-900 absolute top-full left-1/2 -mt-px -ml-2"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
									fill="currentColor"
								/>
							</svg>
							Zkopírováno
						</span>
					</div>
					<svg
						data-coppy=""
						aria-hidden="true"
						focusable="false"
						className={`w-4 h-auto ml-2 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 ${
							copySuccess ? "opacity-100" : "opacity-0"
						}`}
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"
						/>
					</svg>
				</div>
			</dd>
		</div>
	);
}
