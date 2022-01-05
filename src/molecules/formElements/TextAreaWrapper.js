import { ErrorMsg, Label, TextArea } from "@src/atoms";
import { useState } from "react";

export function TextAreaWrapper({ formik, name, type, cols, rows, isRequired, description }) {
	const [isVisited, setIsVisited] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div
			className={`
				bg-white border border-gray-400 h-96 relative rounded-md text-gray-300 transition-all
				${isVisited ? "is-visited" : ""} 
				${isFocused ? "is-focused" : ""}
				${formik.touched[name] && formik.errors[name] ? "is-invalid" : ""}
		`}
		>
			<TextArea
				setIsVisited={setIsVisited}
				setIsFocused={setIsFocused}
				formik={formik}
				name={name}
				type={type}
				cols={cols}
				rows={rows}
				isRequired={isRequired}
			/>
			<Label htmlFor={name}>{description}</Label>
			{formik.touched[name] && formik.errors[name] && <ErrorMsg msg={formik.errors[name]} />}
		</div>
	);
}
