import {
	ResponsiveGallery,
	InputAdminWrapper,
	TextAreaAdminWrapper,
	UploadImageWrapper,
	ContactInputWrapper,
	SelectWrapper,
} from "@src/molecules";
import {
	XlWrapper,
	RichTextArea,
	H3,
	CardInputWrapper,
	ButtonSubmit,
	LabelAdmin,
} from "@src/atoms";
const imagesFromServer = [
	{ src: "https://source.unsplash.com/random/?landscape", alt: "" },
	{ src: "https://source.unsplash.com/random/?male", alt: "" },
	{ src: "https://source.unsplash.com/random/?male", alt: "" },
	{ src: "https://source.unsplash.com/random/?female", alt: "" },
	{ src: "https://source.unsplash.com/random/?landscape", alt: "" },
	{ src: "https://source.unsplash.com/random/?landscape", alt: "" },
];

const tagOptions = [
	{ value: "powerlifting", label: "Powerlifting" },
	{ value: "fyzioterapie", label: "Fyzioterapie" },
	{ value: "yoga", label: "Yoga" },
	{ value: "zenmaster", label: "Zen master" },
	{ value: "badminton", label: "Badminton" },
	{ value: "mistrchi", label: "Mistr chi" },
	{ value: "tennis", label: "Tennis" },
	{ value: "squash", label: "Squash" },
	{ value: "fitbox", label: "FitBox" },
];

const paymentOptions = [
	{ value: "hotovost", label: "Hotovost" },
	{ value: "karty", label: "Karty" },
	{ value: "stravenky", label: "Stravenky" },
];

const facilityOptions = [
	{ value: "sprcha", label: "Sprcha" },
	{ value: "zapujcenivybaveni", label: "Zapůjčení vybavení" },
];
export function AdminTrainerForm({ formik }) {
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
						<div className="col-span-6 sm:col-span-4">
							<InputAdminWrapper
								formik={formik}
								name="name"
								type="text"
								description="Jméno trenéra"
							/>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<SelectWrapper
								formik={formik}
								name="paymentOptions"
								description="Země"
								isMulti={false}
								closeMenuOnSelect={true}
								options={[
									{ value: "cz", label: "Česká republika" },
									{ value: "sk", label: "Slovensko" },
								]}
							/>
						</div>

						<div className="col-span-4">
							<InputAdminWrapper
								formik={formik}
								name="addressStreet"
								type="text"
								description="Adresa (ulice)"
							/>
						</div>
						<div className="col-span-2">
							<InputAdminWrapper
								formik={formik}
								name="addressNumber"
								type="text"
								description="Číslo popisné"
							/>
						</div>

						<div className="col-span-6 sm:col-span-6 lg:col-span-2">
							<InputAdminWrapper formik={formik} name="city" type="text" description="Město" />
						</div>

						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<InputAdminWrapper formik={formik} name="region" type="text" description="Kraj" />
						</div>

						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<InputAdminWrapper formik={formik} name="postalCode" type="text" description="PSČ" />
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
							<LabelAdmin>Popis (O trenérovi)</LabelAdmin>
							<div className="mt-1">
								<RichTextArea formik={formik} />
							</div>
							<p className="mt-2 text-sm text-gray-500">Krátký popis trenéra</p>
						</div>
						<div>
							<SelectWrapper
								formik={formik}
								name="activities"
								description="Nabízené aktivity"
								defaultValue={[tagOptions[4], tagOptions[5]]}
								closeMenuOnSelect={false}
								isMulti={true}
								options={tagOptions}
							/>
						</div>

						<div>
							<SelectWrapper
								formik={formik}
								name="paymentOptions"
								description="Způsob platby"
								defaultValue={[paymentOptions[1], paymentOptions[2]]}
								closeMenuOnSelect={false}
								isMulti={true}
								options={paymentOptions}
							/>
						</div>

						<div>
							<SelectWrapper
								formik={formik}
								name="facility"
								description="Poskytované zázemí"
								defaultValue={[facilityOptions[1]]}
								closeMenuOnSelect={false}
								isMulti={true}
								options={facilityOptions}
							/>
						</div>
						<div>
							<TextAreaAdminWrapper
								formik={formik}
								name="openHoursFrom"
								description="Otevírací doba od"
							/>
						</div>
						<div>
							<TextAreaAdminWrapper
								formik={formik}
								name="openHoursFrom"
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
										name="companyWebsite"
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
											name="companyPhone"
											placeholder="+420 789 666 777"
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
						<UploadImageWrapper formik={formik} name="titleImage" description="Úvodní fotografie" />

						<UploadImageWrapper formik={formik} name="images" description="Galerie fotografií" />

						<section>
							<XlWrapper>
								<ResponsiveGallery>{imagesFromServer}</ResponsiveGallery>
							</XlWrapper>
						</section>
					</CardInputWrapper>
					<div className="col-span-2 col-start-2 flex flex-row justify-center px-4 py-3 text-center sm:px-3">
						<ButtonSubmit>Uložit změny</ButtonSubmit>
					</div>
				</div>
			</div>
		</form>
	);
}
