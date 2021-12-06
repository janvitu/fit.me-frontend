import { DynamicSite, BusinessProfileTemplate } from "@src/templates";
import { WorkoutPlaceBusinessData } from "@src/dummyData";

export default function WorkoutPlace() {
	return (
		<DynamicSite>
			<BusinessProfileTemplate BusinessProfileData={WorkoutPlaceBusinessData} />
		</DynamicSite>
	);
}
