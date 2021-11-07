import { H3 } from "@src/atoms";
import { DataDisplayRow } from "@src/atoms";

export function ProfileCard() {
	return (
		<div className="max-w-4xl">
			<div>
				<H3 variant="small">Profil</H3>
			</div>
			<div className="mt-5 border-t border-gray-200">
				<dl className="divide-y divide-gray-200">
					<DataDisplayRow fieldName="Celé jméno" fieldValue="Alber Mírek" />
					<DataDisplayRow fieldName="Telefon" fieldValue="777 777 777" />
					<DataDisplayRow fieldName="email" fieldValue="knuckles@uganda.com" />
					<DataDisplayRow fieldName="Adresa" fieldValue="U Ďolíčku na Bohemce, Praha 10" />
				</dl>
			</div>
		</div>
	);
}
