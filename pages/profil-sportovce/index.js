import { DynamicSite } from "@src/templates";
import { UserProfileTemplate } from "@src/src/templates/UserProfileTemplate";

export default function UserProfile() {
	return (
		<DynamicSite>
			<UserProfileTemplate />
		</DynamicSite>
	);
}
