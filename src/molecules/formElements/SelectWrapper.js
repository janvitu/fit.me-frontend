import { CustomSelect, LabelAdmin } from "@src/atoms";

export function SelectWrapper({
	formik,
	name,
	options,
	isMulti,
	description,
	closeMenuOnSelect,
	defaultValue,
}) {
	return (
		<>
			<LabelAdmin htmlfor={name}>{description}</LabelAdmin>
			<CustomSelect
				name={name}
				formik={formik}
				options={options}
				isMulti={isMulti}
				closeMenuOnSelect={closeMenuOnSelect}
				defaultValue={defaultValue}
			/>
		</>
	);
}
