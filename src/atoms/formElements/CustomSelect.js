import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

export function CustomSelect({
	formik,
	name,
	options,
	isMulti = false,
	closeMenuOnSelect = true,
	defaultValue = "",
}) {
	return (
		<div className="mt-1">
			<Select
				name={name}
				onChange={formik.handleChange}
				value={formik.values[name]}
				closeMenuOnSelect={closeMenuOnSelect}
				components={animatedComponents}
				options={options}
				defaultValue={defaultValue}
				isMulti={isMulti}
				placeholder="Vyberte..."
			/>
		</div>
	);
}
