import { ContactInput, ContactLabel } from "@src/atoms";

export function ContactInputWrapper({ formik, name, prefix, placeholder }) {
	return (
		<div className=" mt-1 flex rounded-md shadow-sm">
			<ContactLabel htmlfor={name}>{prefix}</ContactLabel>
			<ContactInput formik={formik} name={name} id={name} placeholder={placeholder} />
		</div>
	);
}
