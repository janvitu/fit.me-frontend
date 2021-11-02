import { H1, SmWrapper } from "@components/atoms";
import { LogInForm } from "@components/organisms";
import { StaticSite } from "@components/templates";

export default function LogIn() {
	return (
		<StaticSite>
			<SmWrapper>
				<div className="min-h-[60vh] flex flex-col justify-center">
					<div className="mb-8">
						<H1>Přihlašte se</H1>
					</div>
					<div className="w-full">
						<LogInForm />
					</div>
				</div>
			</SmWrapper>
		</StaticSite>
	);
}
