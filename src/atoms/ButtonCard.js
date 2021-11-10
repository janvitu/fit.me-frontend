import email from "@assets/img/email.svg";
import chat from "@assets/img/message.svg";

/**
 * @param  {"email"/"chat"} {type}
 */
export function ButtonCard({ type, text }) {
	const typeHandler = (type) => {
		switch (type) {
			case "email":
				return {
					text: "Email",
					src: email.src,
					alt: "Email Button",
				};
			case "chat":
				return {
					text: "Chat",
					src: chat.src,
					alt: "Chat Button",
				};
			default:
				break;
		}
	};

	return (
		<div className="w-0 flex-1 flex">
			<a
				// href="mailto:janecooper@example.com"
				href="#"
				className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
			>
				<img src={typeHandler(type).src} alt={typeHandler(type).alt} className=" w-6 h-6" />

				<span className="ml-3">{typeHandler(type).text}</span>
			</a>
		</div>
	);
}
