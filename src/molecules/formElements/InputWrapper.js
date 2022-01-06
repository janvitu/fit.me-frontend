import { ErrorMsg, Input, Label } from "@src/atoms";
import { useState } from "react";

export function InputWrapper({ formik, name, type, isRequired, description, className }) {
	const [isVisited, setIsVisited] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	return (
		<div
			className={`
			bg-white border border-gray-400 h-11 relative rounded-md text-gray-300 transition-all
			${className}
			${isVisited ? "is-visited" : ""} 
			${isFocused ? "is-focused" : ""}
			${formik.touched[name] && formik.errors[name] ? "is-invalid" : ""}
		`}
		>
			<Input
				formik={formik}
				name={name}
				type={type}
				isRequired={isRequired}
				setIsFocused={setIsFocused}
				setIsVisited={setIsVisited}
			/>
			<Label htmlFor={name}>{description}</Label>
			{formik.touched[name] && formik.errors[name] && <ErrorMsg msg={formik.errors[name]} />}
		</div>
	);
}
