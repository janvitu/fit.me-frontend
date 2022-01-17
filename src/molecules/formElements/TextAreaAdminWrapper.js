import { TextAreaAdmin, LabelAdmin } from "@src/atoms";

export function TextAreaAdminWrapper({ formik, name, description }) {
	return (
		<>
			<LabelAdmin htmlfor={name}>{description}</LabelAdmin>
			<TextAreaAdmin formik={formik} name={name} />
		</>
	);
}
