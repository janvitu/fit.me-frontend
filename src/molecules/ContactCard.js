import { CopyItem } from "@src/atoms";

export function ContactCard({ imgSrc, imgAlt, name, position, email, phone }) {
	return (
		<div>
			<div className="flex gap-4 items-center">
				<div>
					<img
						className="rounded-full h-14 w-14 object-cover border-2 border-main-800"
						src={imgSrc}
						alt={imgAlt}
					/>
				</div>
				<div>
					<h3 className="text-lg leading-6 font-bold text-gray-900">{name}</h3>
					<h4 className="text-gray-600">{position}</h4>
				</div>
			</div>
			<dl className="mt-2 text-base text-gray-500">
				{email && <CopyItem value={email} />}
				{phone && <CopyItem value={phone} />}
			</dl>
		</div>
	);
}
