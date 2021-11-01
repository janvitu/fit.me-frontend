export const beforeSubmit = (path) => {
	let [input] = document.getElementsByName(path);
	let errField = input.parentElement;

	errField.classList.add("is-invalid");

	input.focus();
};

export const liveValidate = (event, rule) => {
	const parentEl = event.target.parentElement;
	if (parentEl.classList.contains("is-visited")) {
		const fieldValue = event.target.value;
		let errorDiv;
		if (
			(!event.target.required && fieldValue !== "") ||
			(event.target.required && fieldValue !== "")
		) {
			if (!rule.regExp.test(fieldValue)) {
				parentEl.classList.add("is-invalid");
				errorDiv = parentEl.lastChild;
				displayError(errorDiv, rule.errMsg);
			} else {
				parentEl.classList.remove("is-invalid");
				errorDiv = parentEl.lastChild;
				if (errorDiv) errorDiv.classList.add("hidden");
			}
		} else if (event.target.required && fieldValue === "") {
			parentEl.classList.add("is-invalid");
			errorDiv = parentEl.lastChild;

			displayError(errorDiv, rule.emptyErr);
		}
	}
};

export const displayError = (errorDiv, errMsg) => {
	errorDiv.classList.remove("hidden");
	errorDiv.innerHTML = `
		<span class="w-full text-yellow-500">
			${errMsg}
		</span>
  `;
};

export const onFocus = (e) => {
	e.target.parentElement.classList.add("is-focused");
};
export const onBlur = (e, rule) => {
	e.target.parentElement.classList.add("is-visited");
	e.target.parentElement.classList.remove("is-focused");
	liveValidate(e, rule);
};

const r = {
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
