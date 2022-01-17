import toast from "react-hot-toast";
import { useFormik } from "formik";

import { InputAdminWrapper, TextAreaAdminWrapper, ContactInputWrapper } from "@src/molecules";
import { H3, CardInputWrapper, ButtonSubmit, LabelAdmin } from "@src/atoms";

export function AdminPlaceForm({ data, sendData }) {
	const formik = useFormik({
		initialValues: {
			name: data.name || "",
			description: data.description || "",
			opening_hours_from: data.opening_hours_from || "",
			opening_hours_to: data.opening_hours_to || "",
			phone: data.phone || "",
			web: data.web || "",
			intro_text: data.intro_text || "",
			vat_number: data.vat_number || "",
			street: data.address.street || "",
			no: data.address.no || "",
			city: data.address.city || "",
			region: data.address.region || "",
			state: data.address.state || "",
			zip_code: data.address.zip_code || "",
		},
		onSubmit: async (values) => {
			const load = toast.loading("Požadavek se zpracovává");
			await sendData({
				variables: {
					token: localStorage.getItem("token"),
					name: values.name,
					description: values.description,
					opening_hours_from: values.opening_hours_from,
					opening_hours_to: values.opening_hours_to,
					phone: String(values.phone),
					web: values.web,
					intro_text: values.intro_text,
					vat_number: String(values.vat_number),
					street: values.street,
					no: String(values.no),
					city: values.city,
					region: values.region,
					state: values.state,
					zip_code: String(values.zip_code),
				},
			})
				.then((res) => {
					toast.dismiss(load);
					toast.success("Změny uloženy");
				})
				.catch((err) => {
					toast.dismiss(load);
					toast.error("Došlo k chybě při ukládání změn");
					console.log(err);
				});
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="mt-10 sm:mt-0  md:grid md:grid-cols-3 md:gap-6">
				<div className="md:col-span-1">
					<div className="px-4 sm:px-0">
						<H3 variant="small">Údaje o sportovišti</H3>
					</div>
				</div>
				<CardInputWrapper>
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<InputAdminWrapper formik={formik} name="name" type="text" description="Název" />
						</div>
						<div className="col-span-6 sm:col-span-4">
							<InputAdminWrapper formik={formik} name="street" type="text" description="Ulice" />
						</div>
						<div className="col-span-6 sm:col-span-2">
							<InputAdminWrapper formik={formik} name="no" type="text" description="Č.p." />
						</div>
						<div className="col-span-6 sm:col-span-6">
							<InputAdminWrapper formik={formik} name="state" type="text" description="Země" />
						</div>
						<div className="col-span-6 sm:col-span-2">
							<InputAdminWrapper formik={formik} name="city" type="text" description="Město" />
						</div>
						<div className="col-span-6 sm:col-span-2">
							<InputAdminWrapper formik={formik} name="region" type="text" description="Kraj" />
						</div>
						<div className="col-span-6 sm:col-span-2">
							<InputAdminWrapper formik={formik} name="zip_code" type="text" description="PSČ" />
						</div>
						<div className="col-span-6 sm:col-span-4">
							<InputAdminWrapper formik={formik} name="vat_number" type="text" description="IČO" />
						</div>
					</div>
				</CardInputWrapper>
			</div>
			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200" />
				</div>
			</div>
			<div>
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1 sm:mt-0 mt-5 px-4 sm:px-0">
						<h3 className="text-lg font-medium leading-6 text-gray-900">Profil sportoviště</h3>
						<p className="mt-1 text-sm text-gray-600">Základní údaje o sportovišti</p>
					</div>

					<CardInputWrapper>
						<div>
							<div className="col-span-6 sm:col-span-2">
								<InputAdminWrapper
									formik={formik}
									name="intro_text"
									type="text"
									description="Krátký popis"
								/>
							</div>
							<LabelAdmin>Popis (O sportovišti)</LabelAdmin>
							<div className="mt-1">
								<TextAreaAdminWrapper formik={formik} name="description" />
							</div>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<InputAdminWrapper
								formik={formik}
								name="opening_hours_from"
								description="Otevírací doba od"
								type="time"
							/>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<InputAdminWrapper
								formik={formik}
								type="time"
								name="opening_hours_to"
								description="Otevírací doba do"
							/>
						</div>

						<div>
							<LabelAdmin htmlfor="companyWebsite">Kontaktní údaje</LabelAdmin>
							<div className="grid grid-cols-3 gap-6">
								<div className="col-span-3 sm:col-span-2">
									<ContactInputWrapper
										formik={formik}
										prefix="http://"
										name="web"
										placeholder="www.example.com"
									/>
								</div>
							</div>
							<div className="flex flex-col md:flex-row sm:mt-2  ">
								<div className="grid grid-cols-3 gap-6 mt-1 ">
									<div className="col-span-3">
										<ContactInputWrapper
											formik={formik}
											prefix="Tel.:"
											name="phone"
											placeholder="789666777"
										/>
									</div>
								</div>
							</div>
						</div>
					</CardInputWrapper>
					<div className="col-span-2 col-start-2 flex flex-row justify-center px-4 py-3 text-center sm:px-3">
						<ButtonSubmit>Uložit změny</ButtonSubmit>
					</div>
				</div>
			</div>
		</form>
	);
}
