import { SmWrapper } from "@components/atoms";
import { LogInForm } from "@components/organisms";
import { StaticSite } from "@components/templates";

export default function LogIn() {
	return (
		<StaticSite>
			<SmWrapper>
				<LogInForm />
			</SmWrapper>
		</StaticSite>
	);
}
