import { LabelAdmin, InputAdmin } from "@src/atoms";

export function InputAdminWrapper({ formik, name, type, description }) {
	return (
		<>
			<LabelAdmin htmlfor={name}>{description}</LabelAdmin>
			<InputAdmin formik={formik} name={name} type={type} />
		</>
	);
}
