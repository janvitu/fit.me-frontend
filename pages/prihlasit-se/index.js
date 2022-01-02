import { H1, SmWrapper } from "@src/atoms";
import { LogInForm } from "@src/organisms";
import { StaticSite } from "@src/templates";

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
