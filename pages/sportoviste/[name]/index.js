import { DynamicSite, SportsgroundProfileTemplate } from "@src/templates";
import { WorkoutPlaceBusinessData } from "@src/dummyData";

export default function WorkoutPlace() {
	return (
		<DynamicSite>
			<SportsgroundProfileTemplate BusinessProfileData={WorkoutPlaceBusinessData} />
		</DynamicSite>
	);
}
