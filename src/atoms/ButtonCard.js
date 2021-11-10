export function ButtonCard({ text, img }) {
	return (
		<div className="w-0 flex-1 flex">
			<a
				// href="mailto:janecooper@example.com"
				href="#"
				className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
			>
				<img src={img.src} alt={img.alt} className=" w-6 h-6" />

				<span className="ml-3">{text}</span>
			</a>
		</div>
	);
}
