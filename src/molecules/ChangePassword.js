import { useState } from "react";

import { InputWrapper, Modal } from "@src/molecules";
import { Label, H3, ButtonSubmit } from "@src/atoms";

export function ChangePassword({}) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<a href="#" onClick={() => setIsVisible(true)}>
				Změnit heslo
			</a>
			<Modal isOpen={isVisible} onClose={() => setIsVisible(!isVisible)}>
				{/* <InputWrapper />
				<InputWrapper /> */}
				<H3>Změna hesla</H3>
				<form className="space-y-9">
					<div className="space-y-9">
						<div className="bg-white border border-gray-400 h-11 relative rounded-md text-gray-300 transition-all">
							<input
								name="oldpwd"
								type="text"
								className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
							/>
							<Label htmlFor="oldpwd">Staré heslo</Label>
						</div>
						<div className="bg-white border border-gray-400 h-11 relative rounded-md text-gray-300 transition-all">
							<input
								name="newpwd"
								type="text"
								className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
							/>
							<Label htmlFor="newpwd">Nové heslo</Label>
						</div>
						<div className="bg-white border border-gray-400 h-11 relative rounded-md text-gray-300 transition-all">
							<input
								name="nwpwd2"
								type="text"
								className="bg-transparent h-full outline-none pb-3 pl-4 pt-3 text-gray-700 w-full"
							/>
							<Label htmlFor="newpwd2">Nové heslo - podruhé (pro kontrolu)</Label>
						</div>
					</div>
					<ButtonSubmit>Změnit heslo</ButtonSubmit>
				</form>
			</Modal>
		</>
	);
}
