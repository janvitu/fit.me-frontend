import { H1, SmWrapper } from "@src/atoms";
import { StaticSite } from "@src/templates";
import { RegisterUser, RegisterWorkoutPlace, RegisterTrainer } from "@src/organisms";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Registrace() {
	const [registerFormRoute, setRegisterFormRoute] = useState("user");

	const router = useRouter();
	const formTypes = ["user", "trainer", "place"];

	useEffect(() => {
		if (formTypes.includes(router.query.formType)) setRegisterFormRoute(router.query.formType);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.query.formType]);

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
