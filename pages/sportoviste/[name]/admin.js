import { ResponsiveGallery } from "@src/molecules";
import { DynamicSite } from "@src/templates";
import { XlWrapper, ButtonLink, Input } from "@src/atoms";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { useFormik } from "formik";

const UPDATE_BIO = gql`
	mutation CreateSportsman($name: String!, $surname: String!, $email: String!, $password: String!) {
		createSportsman(name: $name, surname: $surname, email: $email, password: $password)
	}
`;
const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GQL_SERVER,
	cache: new InMemoryCache(),
});
const animatedComponents = makeAnimated();

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

function Example() {
	const [updateBio] = useMutation(UPDATE_BIO);
	const formik = useFormik({
		initialValues: {
			name: "",
			shortcut: "",
			country: "",
			address: "",
			region: "",
			city: "",
			postalCode: "",
			about: "",
			activities: [""],
			paymentOptions: [""],
			facility: [""],
			openHours: "",
			companyWebsite: "",
			companyEmail: "",
			companyPhone: "",
			titleImage: "",
			images: [""],
		},
		onSubmit: (values) => {
			// const load = toast.loading("Požadavek se zpracovává");
			updateBio({
				variables: {
					name: values.name,
					shortcut: values.shortcut,
					country: values.country,
					address: values.address,
					region: values.region,
					city: values.city,
					postalode: values.postalCode,
					about: values.about,
					activities: values.activities,
					paymentOptions: values.paymentOptions,
					facility: values.facility,
					openHours: values.openHours,
					companyWebsite: values.companyWebsite,
					companyEmail: values.companyEmail,
					companyPhone: values.companyPhone,
					titleImage: values.titleImage,
					images: values.images,
				},
			})
				.then((res) => {
					console.log(res);
					// Router.push("/prihlasit-se");
					// toast.dismiss(load);
					// toast.success("Změny uloženy");
				})
				.catch((err) => {
					// toast.dismiss(load);
					// toast.error("Došlo k chybě při ukládání změn");
					console.log(err);
				});
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Jméno nesmí být prázdné"),
			// surname: Yup.string().required("Příjmení nesmí být prázdné"),
			// email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			// password: Yup.string()
			// 	.min(8, "Heslo musí obsahovat minimálně 8 znaků")
			// 	.required("Heslo musí být vyplněno")
			// 	.matches(/^(?=.*[a-záčďéěíňóřšťúůýž])/, "Heslo musí obsahovat alespoň jedno malé písmeno")
			// 	.matches(/^(?=.*[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ])/, "Heslo musí obsahovat alespoň jedno velké písmeno")
			// 	.matches(/^(?=.*\d)/, "Heslo musí obsahovat alespoň jedno číslo"),
			// secondPassword: Yup.string()
			// 	.oneOf([Yup.ref("password")], `Hesla se neshoduj`)
			// 	.required("Pole musí být vyplněné"),
		}),
	});
	return (
		<>
			<DynamicSite>
				<XlWrapper>
					<form onSubmit={formik.handleSubmit}>
						<div className="mt-10 sm:mt-0">
							<div className="md:grid md:grid-cols-3 md:gap-6">
								<div className="md:col-span-1">
									<div className="px-4 sm:px-0">
										<h3 className="text-lg font-medium leading-6 text-gray-900">
											Údaje o sportovišti
										</h3>
									</div>
								</div>
								<div className="mt-5 md:mt-0 md:col-span-2">
									<div className="shadow overflow-hidden sm:rounded-md">
										<div className="px-4 py-5 bg-white sm:p-6">
											<div className="grid grid-cols-6 gap-6">
												<div className="col-span-6 sm:col-span-3">
													<label htmlFor="name" className="block text-sm font-medium text-gray-700">
														Název sportoviště
													</label>
													<input
														onChange={formik.handleChange}
														value={formik.values["name"]}
														type="text"
														name="name"
														id="name"
														autoComplete="given-name"
														className="py-1 px-3 mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
													/>
												</div>

												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="shortcut"
														className="block text-sm font-medium text-gray-700"
													>
														Zkratka sportoviště (@)
													</label>
													<input
														onChange={formik.handleChange}
														value={formik.values["shortcut"]}
														type="text"
														name="shortcut"
														id="shortcut"
														autoComplete="family-name"
														className="py-1 px-3 mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
													/>
												</div>

												{/* <div className="col-span-6 sm:col-span-4">
											<label
												htmlFor="email-address"
												className="block text-sm font-medium text-gray-700"
											>
												Email
											</label>
											<input
												type="text"
												name="email-address"
												id="email-address"
												autoComplete="email"
												className="mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div> */}

												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="country"
														className="block text-sm font-medium text-gray-700"
													>
														Země
													</label>
													<select
														onChange={formik.handleChange}
														value={formik.values["country"]}
														id="country"
														name="country"
														autoComplete="country-name"
														className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
													>
														<option>Česká republika</option>
														<option>Slovensko</option>
													</select>
												</div>

												<div className="col-span-6">
													<label
														htmlFor="address"
														className="block text-sm font-medium text-gray-700"
													>
														Adresa
													</label>
													<input
														onChange={formik.handleChange}
														value={formik.values["address"]}
														type="text"
														name="address"
														id="address"
														autoComplete="address"
														className="py-1 px-3 mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md"
													/>
												</div>

												<div className="col-span-6 sm:col-span-6 lg:col-span-2">
													<label htmlFor="city" className="block text-sm font-medium text-gray-700">
														Město
													</label>
													<input
														onChange={formik.handleChange}
														value={formik.values["city"]}
														type="text"
														name="city"
														id="city"
														autoComplete="address-level2"
														className="py-1 px-3 mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md"
													/>
												</div>

												<div className="col-span-6 sm:col-span-3 lg:col-span-2">
													<label
														htmlFor="region"
														className="block text-sm font-medium text-gray-700"
													>
														Kraj
													</label>
													<input
														onChange={formik.handleChange}
														value={formik.values["region"]}
														type="text"
														name="region"
														id="region"
														autoComplete="address-level1"
														className="py-1 px-3 mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
													/>
												</div>

												<div className="col-span-6 sm:col-span-3 lg:col-span-2">
													<label
														htmlFor="postalCode"
														className="block text-sm font-medium text-gray-700"
													>
														PSČ
													</label>
													<input
														onChange={formik.handleChange}
														value={formik.values["postalCode"]}
														type="text"
														name="postalCode"
														id="postalCode"
														autoComplete="postalCode"
														className="py-1 px-3 mt-1 focus:ring-main-500 focus:border-main-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden sm:block" aria-hidden="true">
							<div className="py-5">
								<div className="border-t border-gray-200" />
							</div>
						</div>
						<div>
							<div className="md:grid md:grid-cols-3 md:gap-6">
								<div className="md:col-span-1">
									<div className="px-4 sm:px-0">
										<h3 className="text-lg font-medium leading-6 text-gray-900">
											Profil sportoviště
										</h3>
										<p className="mt-1 text-sm text-gray-600">Základní údaje o sportovišti</p>
									</div>
								</div>
								<div className="mt-5 md:mt-0 md:col-span-2">
									<div className="shadow sm:rounded-md sm:overflow-hidden">
										<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
											<div>
												<label htmlFor="about" className="block text-sm font-medium text-gray-700">
													Popis (O sportovišti)
												</label>
												<div className="mt-1">
													<textarea
														onChange={formik.handleChange}
														value={formik.values["about"]}
														id="about"
														name="about"
														rows={5}
														className="py-1 px-3 shadow-sm focus:ring-main-500 focus:border-main-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
														placeholder="Popis"
														defaultValue={""}
													/>
												</div>
												<p className="mt-2 text-sm text-gray-500">Krátký popis sportoviště</p>
											</div>
											<div>
												<label
													htmlFor="activities"
													className="block text-sm font-medium text-gray-700"
												>
													Nabízené aktivity
												</label>
												<Select
													name="activities"
													onChange={formik.handleChange}
													value={formik.values["activities"]}
													closeMenuOnSelect={false}
													components={animatedComponents}
													defaultValue={[tagOptions[4], tagOptions[5]]}
													isMulti
													options={tagOptions}
												/>
											</div>

											<div>
												<label
													htmlFor="paymentOptions"
													className="block text-sm font-medium text-gray-700"
												>
													Způsob platby
												</label>
												<Select
													name="paymentOptions"
													onChange={formik.handleChange}
													value={formik.values["paymentOptions"]}
													closeMenuOnSelect={false}
													components={animatedComponents}
													defaultValue={[paymentOptions[1], paymentOptions[2]]}
													isMulti
													options={paymentOptions}
												/>
											</div>

											<div>
												<label
													htmlFor="facility"
													className="block text-sm font-medium text-gray-700"
												>
													Poskytované zázemí
												</label>
												<Select
													name="facility"
													onChange={formik.handleChange}
													value={formik.values["facility"]}
													closeMenuOnSelect={false}
													components={animatedComponents}
													defaultValue={[facilityOptions[1]]}
													isMulti
													options={facilityOptions}
												/>
											</div>
											<div>
												<label
													htmlFor="openHours"
													className="block text-sm font-medium text-gray-700"
												>
													Otevírací doba
												</label>
												<div className="mt-1">
													<textarea
														onChange={formik.handleChange}
														value={formik.values["openHours"]}
														id="openHours"
														name="openHours"
														rows={2}
														className="py-1 px-3 shadow-sm focus:ring-main-500 focus:border-main-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
														placeholder="Po - Ne: 6:00 - 17:00"
														defaultValue={""}
													/>
												</div>
											</div>
											<div>
												<label
													htmlFor="companyWebsite"
													className="block text-sm font-medium text-gray-700"
												>
													Kontaktní údaje
												</label>
												<div className="grid grid-cols-3 gap-6">
													<div className="col-span-3 sm:col-span-2">
														<div className=" mt-1 flex rounded-md shadow-sm">
															<span className="w-16 py-1 px-3 inline-flex items-center px-3 rounded-l-md border border-r-1 border-gray-300 bg-gray-50 text-gray-500 text-sm">
																http://
															</span>
															<input
																onChange={formik.handleChange}
																value={formik.values["companyWebsite"]}
																type="text"
																name="companyWebsite"
																id="companyWebsite"
																className="py-1 px-3 focus:ring-main-500 focus:border-main-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
																placeholder="www.example.com"
															/>
														</div>
													</div>
												</div>
												<div className="flex flex-col md:flex-row sm:mt-2">
													<div className="grid grid-cols-3 gap-6 mt-1">
														<div className="col-span-3">
															<div className="mt-1 flex rounded-md shadow-sm">
																<span className="w-16 py-1 px-3 inline-flex items-center px-3 rounded-l-md border border-r-1 border-gray-300 bg-gray-50 text-gray-500 text-sm">
																	Email
																</span>
																<input
																	onChange={formik.handleChange}
																	value={formik.values["companyEmail"]}
																	type="text"
																	name="companyEmail"
																	id="companyEmail"
																	className="py-1 px-3 focus:ring-main-500 focus:border-main-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
																	placeholder="vladciprahy@ACS.cz"
																/>
															</div>
														</div>
													</div>
													<div className="grid grid-cols-3 gap-6 mt-1 ">
														<div className="col-span-3">
															<div className="mt-1 flex rounded-md shadow-sm">
																<span className="w-16 py-1 px-3 inline-flex items-center px-3 rounded-l-md border border-r-1 border-gray-300 bg-gray-50 text-gray-500 text-sm">
																	Tel.:
																</span>
																<input
																	onChange={formik.handleChange}
																	value={formik.values["companyPhone"]}
																	type="text"
																	name="companyPhone"
																	id="companyPhone"
																	className="py-1 px-3 focus:ring-main-500 focus:border-main-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
																	placeholder="+420 604 399 488"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700">
													Profilová fotografie sportoviště
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

											<div>
												<label className="block text-sm font-medium text-gray-700">
													Úvodní fotografie
												</label>
												<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
													<div className="space-y-1 text-center">
														<svg
															className="mx-auto h-12 w-12 text-gray-400"
															stroke="currentColor"
															fill="none"
															viewBox="0 0 48 48"
															aria-hidden="true"
														>
															<path
																d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<div className="flex text-sm text-gray-600">
															<label
																htmlFor="titleImage"
																className="relative cursor-pointer bg-white rounded-md font-medium text-main-600 hover:text-main-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-main-500"
															>
																<span>Upload a file</span>
																<input
																	onChange={formik.handleChange}
																	value={formik.values["titleImage"]}
																	id="titleImage"
																	name="titleImage"
																	type="file"
																	className="sr-only"
																/>
															</label>
															<p className="pl-1">or drag and drop</p>
														</div>
														<p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
													</div>
												</div>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700">
													Galerie fotografií
												</label>
												<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
													<div className="space-y-1 text-center">
														<svg
															className="mx-auto h-12 w-12 text-gray-400"
															stroke="currentColor"
															fill="none"
															viewBox="0 0 48 48"
															aria-hidden="true"
														>
															<path
																d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<div className="flex text-sm text-gray-600">
															<label
																htmlFor="images"
																className="relative cursor-pointer bg-white rounded-md font-medium text-main-600 hover:text-main-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-main-500"
															>
																<span>Upload a file</span>
																<input
																	onChange={formik.handleChange}
																	value={formik.values["images"]}
																	id="images"
																	name="images"
																	type="file"
																	className="sr-only"
																/>
															</label>
															<p className="pl-1">or drag and drop</p>
														</div>
														<p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
													</div>
												</div>
											</div>

											<section>
												<XlWrapper>
													<ResponsiveGallery>{imagesFromServer}</ResponsiveGallery>
												</XlWrapper>
											</section>
										</div>
									</div>
									<div className="flex flex-row justify-center">
										<div className="px-4 py-3 text-center sm:px-3">
											<button
												type="submit"
												className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
											>
												Zrušit
											</button>
										</div>

										<div className="px-4 py-3 text-center sm:px-3">
											<button
												type="submit"
												className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
											>
												Uložit změny
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div className="hidden sm:block" aria-hidden="true">
						<div className="py-5">
							<div className="border-t border-gray-200" />
						</div>
					</div>
				</XlWrapper>
			</DynamicSite>
		</>
	);
}

export default function Page() {
	return (
		<ApolloProvider client={client}>
			<Example />
		</ApolloProvider>
	);
}
