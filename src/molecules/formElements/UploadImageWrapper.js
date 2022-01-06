import { LabelAdmin, UploadImage } from "@src/atoms";

export function UploadImageWrapper({ formik, name, description }) {
	return (
		<div>
			<LabelAdmin>{description}</LabelAdmin>
			<UploadImage formik={formik} name={name} />
		</div>
	);
}
