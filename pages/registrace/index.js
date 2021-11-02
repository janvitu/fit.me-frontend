import { H1, SmWrapper } from "@components/atoms";
import { StaticSite } from "@components/templates";
import { RegisterUser, RegisterWorkoutPlace, RegisterTrainer } from "@components/organisms";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Registrace() {
	const [registerFormRoute, setRegisterFormRoute] = useState("user");

	const router = useRouter();
	const formTypes = ["user", "trainer", "place"];
	if (formTypes.includes(router.query.formType)) setRegisterFormRoute(router.query.formType);

	const getFormByType = (registerFormRoute) => {
		switch (registerFormRoute) {
			case "place":
				return <RegisterWorkoutPlace />;
			case "trainer":
				return <RegisterTrainer />;
			default:
				return <RegisterUser />;
		}
	};

	return (
		<StaticSite>
			<SmWrapper>
				<div className="min-h-[60vh] flex items-center justify-center flex-col">
					<div className="mb-8">
						<H1>Registrovat se</H1>
					</div>
					<div className="text-sm my-8">
						<nav>
							<ul className="flex gap-4 divide-x-2">
								<li>
									<button onClick={() => setRegisterFormRoute("user")}>registrace uživatele</button>
								</li>
								<li>
									<button onClick={() => setRegisterFormRoute("trainer")}>
										registrace trenéra
									</button>
								</li>
								<li>
									<button onClick={() => setRegisterFormRoute("place")}>
										registrace sportoviště
									</button>
								</li>
							</ul>
						</nav>
					</div>
					<div className="w-full">{getFormByType(registerFormRoute)}</div>
				</div>
			</SmWrapper>
		</StaticSite>
	);
}
