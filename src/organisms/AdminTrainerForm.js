import { useFormik } from "formik";
import toast from "react-hot-toast";
import { InputAdminWrapper, TextAreaAdminWrapper, ContactInputWrapper } from "@src/molecules";
import { H3, CardInputWrapper, ButtonSubmit, LabelAdmin } from "@src/atoms";

export function AdminTrainerForm({ data, sendData }) {
	const formik = useFormik({
		initialValues: {
			name: data.name || "",
			vat_number: data.vat_number || "",
			surname: data.surname || "",
			intro_text: data.intro_text || "",
			description: data.description || "",
			specialization: data.specialization || "",
			phone: data.phone || "",
		},
		onSubmit: async (values) => {
			const load = toast.loading("Požadavek se zpracovává");
			await sendData({
				variables: {
					token: localStorage.getItem("token"),
					name: values.name,
					vat_number: values.vat_number,
					surname: values.surname,
					intro_text: values.intro_text,
					description: values.description,
					specialization: values.specialization,
					phone: values.phone,
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
						<H3 variant="small">Údaje o trenérovi</H3>
					</div>
				</div>
				<CardInputWrapper>
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<InputAdminWrapper formik={formik} name="name" type="text" description="Jméno" />
						</div>
						<div className="col-span-6 sm:col-span-3">
							<InputAdminWrapper
								formik={formik}
								name="surname"
								type="text"
								description="Příjmení"
							/>
						</div>
						<div className="col-span-6 sm:col-span-3">
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
						<h3 className="text-lg font-medium leading-6 text-gray-900">Profil trenéra</h3>
						<p className="mt-1 text-sm text-gray-600">Základní údaje o trenérovi</p>
					</div>

					<CardInputWrapper>
						<div>
							<InputAdminWrapper
								formik={formik}
								name="intro_text"
								type="text"
								description="Krátký popis"
							/>
						</div>
						<div>
							<LabelAdmin>Popis (O trenérovi)</LabelAdmin>
							<div className="mt-1">
								<TextAreaAdminWrapper formik={formik} name="description" />
							</div>
						</div>
						<div>
							<InputAdminWrapper
								formik={formik}
								name="specialization"
								type="text"
								description="Specializace"
							/>
						</div>

						<div>
							<LabelAdmin htmlfor="companyWebsite">Kontaktní údaje</LabelAdmin>

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
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Profilová fotografie trenéra
							</label>
							<div className="mt-1 flex items-center">
								<span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
									<svg
										className="h-full w-full text-gray-300"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</span>
								<button
									type="button"
									className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
								>
									Změnit
								</button>
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
