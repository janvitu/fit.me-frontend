import { StaticSite } from "@components/templates";

export default function Contact() {
	const beforeSubmit = (errText, path) => {
		let [input] = document.getElementsByName(path);
		let errField = input.parentElement;

		// formState.setProperty(path, errText);
		errField.classList.add("is-invalid");

		input.focus();
	};

	const liveValidate = (event) => {
		const rules = {
			email: {
				regExp:
					/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				errMsg: "Nesprávný formát emailu",
				emptyErr: "Email nesmí být prázdný",
			},
			phone: {
				regExp: /^([\+][0-9]{1,3}[ \.\-]?)?([0-9]{3}[ ]?){3}$/,
				errMsg: "Chybný formát telefonního čísla",
				emptyErr: "",
			},
			subject: {
				regExp: /^(.+){0,60}$/,
				errMsg: "Předmět přesahuje maximální povolenou délku",
				emptyErr: "Předmět nesmí být prázdný",
			},
			name: {
				regExp: /^.+$/,
				errMsg: "Jméno nesmí být prázdné",
				emptyErr: "Jméno nesmí být prázdné",
			},
		};
		const parentEl = event.target.parentElement;
		if (parentEl.classList.contains("is-visited")) {
			const name = event.target.name;
			const fieldRules = rules[name];
			const fieldValue = event.target.value;
			let errorDiv;
			// test input field value
			if (
				(!event.target.required && fieldValue !== "") ||
				(event.target.required && fieldValue !== "")
			) {
				if (!fieldRules.regExp.test(fieldValue)) {
					// formState.setProperty(name, fieldRules.errMsg);
					parentEl.classList.add("is-invalid");
					errorDiv = document.getElementById(`${name}__error`);
					console.log(errorDiv);
					displayError(errorDiv, fieldRules.errMsg);
				} else {
					// formState.setProperty(name);
					parentEl.classList.remove("is-invalid");
					errorDiv = document.getElementById(`${name}__error`);
					if (errorDiv) errorDiv.classList.add("hidden");
				}
			} else if (event.target.required && fieldValue === "") {
				// formState.setProperty(name, fieldRules.emptyErr);
				parentEl.classList.add("is-invalid");
				errorDiv = document.getElementById(`${name}__error`);
				displayError(errorDiv, fieldRules.emptyErr);
			}
		}
	};

	const displayError = (errorDiv, errMsg) => {
		errorDiv.classList.remove("hidden");
		errorDiv.innerHTML = `
		<span class="w-full text-yellow-500">
			${errMsg}
		</span>
  `;
	};

	const onFocus = (e) => {
		e.target.parentElement.classList.add("is-focused");
	};
	const onFocusOut = (e) => {
		e.target.parentElement.classList.add("is-visited");
		e.target.parentElement.classList.remove("is-focused");
		liveValidate(e);
	};

	return (
		<StaticSite>
			<section className="lg:px-8 lg:py-16 px-4 py-12 relative sm:px-6">
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-4xl">Kontaktujte nás</h1>
					<div className="bg-mainG h-2 mb-4 mt-2 rounded-full w-16"></div>
				</div>
				<div className="max-w-prose mt-4 mx-auto space-y-6 text-center">
					<p className="text-black">
						Máte dotaz nebo chcete vědět více o projektu?
						<span className="block font-bold">Napište nám!</span>
					</p>
					<div>
						<span className="block">+420 666 888 999</span>
						<span className="block">email@nekde.com</span>
					</div>
				</div>
			</section>
			<section className="lg:px-8 lg:py-16 px-4 py-12 relative sm:px-6">
				<div className="max-w-5xl mx-auto space-y-4">
					<header className="space-y-6">
						<h2 className="font-bold normal-case text-2xl"> Chcete se dozvědět více? </h2>
						<p>Napište nám a rádi vám poskytneme další informace.</p>
					</header>
					<main>
						<form method="post" className="space-y-4">
							<div className="space-y-8">
								<div
									className="bg-white border border-gray-400 h-11 mb-6 mt-2 mx-1 relative rounded-md text-gray-300 transition-all"
									relative=""
									text-gray-200=""
									h-11=""
									rounded-t-md=""
									bg-black=""
									bg-opacity-10=""
								>
									<input
										onFocus={onFocus}
										onBlur={onFocusOut}
										onInput={liveValidate}
										name="name"
										id="name"
										type="text"
										className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
										required=""
									/>
									<label
										htmlFor="name"
										className="-translate-y-1/2 absolute block ml-3 px-1.5 top-1/2 transform transition-all"
									>
										Jméno a příjmení
									</label>
									<div
										id="name__error"
										className="absolute bottom-0 hidden italic pl-3 text-left text-sm transform translate-y-full"
									></div>
								</div>
								<div className="bg-white border border-gray-400 h-11 relative rounded-md text-gray-300 transition-all">
									<input
										onFocus={onFocus}
										onBlur={onFocusOut}
										onInput={liveValidate}
										name="email"
										id="email"
										type="email"
										className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
										required=""
									/>
									<label
										htmlFor="email"
										className="-translate-y-1/2 absolute block ml-3 px-1.5 top-1/2 transform transition-all"
									>
										Email
									</label>
									<div
										id="email__error"
										className="absolute bottom-0 hidden italic pl-4 text-left text-sm transform translate-y-full w-full"
									></div>
								</div>
								<div className="bg-white border border-gray-400 h-11 relative rounded-md text-gray-300 transition-all">
									<input
										onFocus={onFocus}
										onBlur={onFocusOut}
										onInput={liveValidate}
										name="phone"
										id="phone"
										type="text"
										className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
									/>
									<label
										htmlFor="phone"
										className="-translate-y-1/2 absolute block ml-3 px-1.5 top-1/2 transform transition-all"
									>
										Telefon
									</label>
									<div
										id="phone__error"
										className="absolute bottom-0 hidden italic pl-4 text-left text-sm transform translate-y-full w-full"
									></div>
								</div>
								<div className="bg-white border border-gray-400 h-96 relative rounded-md text-gray-300 transition-all">
									<textarea
										onFocus={onFocus}
										onBlur={onFocusOut}
										onInput={liveValidate}
										name="message"
										id="message"
										type="text"
										className="bg-transparent h-full outline-none pb-3 pl-3 pt-3 resize-none text-gray-700 w-full"
										cols="30"
										rows="10"
									></textarea>
									<label
										htmlFor="message"
										className="absolute block ml-3 px-1.5 top-3 transition-all"
									>
										Zpráva
									</label>
									<div
										id="message__error"
										className="absolute bottom-0 hidden italic pl-4 text-left text-sm transform translate-y-full w-full"
									></div>
								</div>
							</div>
							<div>
								<span>
									Odesláním souhlasíte se
									<a
										href="./osobni-udaje/"
										className="hover:text-mainGDark text-mainG transition-colors underline"
									>
										zpracováním osobních údajů
									</a>
									.
								</span>
							</div>
							<button
								type="submit"
								className="bg-mainG hover:bg-mainGDark inline-block mt-4 px-8 py-4 rounded-md text-white transition-colors"
							>
								Odeslat formulář
							</button>
						</form>
					</main>
				</div>
			</section>
		</StaticSite>
	);
}
