import { DynamicSite, BusinessProfileTemplate } from "@src/templates";
import { TrainerBusinessData } from "@src/dummyData";

export default function Trainer() {
	return (
		<DynamicSite>
			<BusinessProfileTemplate BusinessProfileData={TrainerBusinessData} />
		</DynamicSite>
	);
}
