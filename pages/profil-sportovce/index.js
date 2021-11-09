import { DynamicSite } from "@src/templates";
import { UserProfileTemplate } from "@src/templates/UserProfileTemplate";

export default function UserProfile() {
	return (
		<DynamicSite>
			<UserProfileTemplate />
		</DynamicSite>
	);
}
