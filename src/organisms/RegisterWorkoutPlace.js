import { InputWrapper } from "@src/molecules";
import { useFormik } from "formik";
import { ButtonSubmit } from "../atoms/ButtonSubmit";

import * as Yup from "yup";

export function RegisterWorkoutPlace() {
	const formik = useFormik({
		initialValues: {
			name: "",
			street: "",
			city: "",
			zip: "",
			email: "",
			ico: "",
			password: "",
			secondPassword: "",
		},
		onSubmit: (values) => {
			console.log(JSON.stringify(values, null));
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Jméno nesmí být prázdné"),
			street: Yup.string().required("Ulice a číslo popisné nesmí být prázdné"),
			city: Yup.string().required("Město nesmí být prázdné"),
			zip: Yup.string()
				.required("PSČ nesmí být prázdné")
				.matches("^(([0-9]{5})|([0-9]{3} [0-9]{2}))?$", "PSČ není ve správném formátu"),
			email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			ico: Yup.string().max(8, "IČO může obsahovat maximálně 8 čísel"),
			password: Yup.string()
				.min(8, "Heslo musí obsahovat minimálně 8 znaků")
				.required("Heslo musí být vyplněno")
				.matches(/^(?=.*[a-záčďéěíňóřšťúůýž])/, "Heslo musí obsahovat alespoň jedno malé písmeno")
				.matches(/^(?=.*[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ])/, "Heslo musí obsahovat alespoň jedno velké písmeno")
				.matches(/^(?=.*\d)/, "Heslo musí obsahovat alespoň jedno číslo"),
			secondPassword: Yup.string()
				.oneOf([Yup.ref("password")], `Hesla se neshoduj`)
				.required("Pole musí být vyplněné"),
		}),
	});
	return (
		<form className="space-y-9" onSubmit={formik.onSubmit}>
			<div className="space-y-9">
				<InputWrapper formik={formik} name="name" type="text" isRequired description="Název" />
				<div>
					<label className="text-base">Adresa sportoviště</label>
					<div className="grid mt-4 grid-cols-2 gap-x-4 gap-y-9">
						<div className="col-span-2">
							<InputWrapper
								formik={formik}
								name="street"
								type="text"
								isRequired
								description="Ulice a číslo popisné"
							/>
						</div>
						<InputWrapper formik={formik} name="city" type="text" isRequired description="Město" />
						<InputWrapper formik={formik} name="zip" type="text" isRequired description="PSČ" />
					</div>
				</div>

				<InputWrapper formik={formik} name="ico" type="string" isRequired description="IČO" />
				<InputWrapper formik={formik} name="email" type="email" isRequired description="Email" />
				<InputWrapper
					formik={formik}
					name="password"
					type="password"
					isRequired
					description="Heslo"
				/>
				<InputWrapper
					formik={formik}
					name="secondPassword"
					type="password"
					isRequired
					description="Znovu zadejte heslo"
				/>
			</div>
			<div className="flex justify-center">
				<ButtonSubmit>Registrovat se</ButtonSubmit>
			</div>
		</form>
	);
}
