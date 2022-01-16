import { useState, useContext } from "react";
import { Modal } from "./Modal";
import { H3, ButtonSubmit } from "@src/atoms";
import { UserContext } from "@src/utils/UserProvider";
import { InputWrapper } from "./formElements/InputWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { ADD_SPORTSMAN, ADD_COACH, ADD_SPORTSGROUND } from "@src/utils/accountTypeFunctions";

const options = [
	{ name: "Sportovec", type: "sportsman" },
	{ name: "Sportoviště", type: "sportsground" },
	{ name: "Trenér", type: "coach" },
];

export function AddNewAccount() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeOption, setActiveOption] = useState(null);
	const { user } = useContext(UserContext);
	const [createSportsman] = useMutation(ADD_SPORTSMAN);
	const [createCoach] = useMutation(ADD_COACH);
	const [createSportsGround] = useMutation(ADD_SPORTSGROUND);
	console.log("property", user?.hasOwnProperty("sportsground"));
	console.log(user);
	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			vat_number: "",
			street: "",
			city: "",
		},
		onSubmit: (values) => {
			try {
				if (values.accType == "coach")
					createCoach({
						variables: {
							name: values.name,
							surname: values.surname,
							street: values.street,
							email: user.email,
							city: values.city,
							vat_number: values.vat_number.toString(),
						},
					}).then((res) => {
						console.log(res);
					});
				if (values.accType == "sportsground")
					createSportsGround({
						variables: {
							name: values.name,
							street: values.street,
							email: user.email,
							city: values.city,
							vat_number: values.vat_number,
						},
					}).then((res) => {
						console.log(res);
					});
				if (values.accType == "sportsman")
					createSportsman({
						variables: { name: values.name, surname: values.surname, email: user.email },
					}).then((res) => {
						console.log(res);
					});
				const load = toast.loading("Požadavek se zpracovává");
			} catch (error) {
				console.log(error);
				toast.dismiss(load);
				toast.error("Registrace se nezdařila");
			}
			formik.resetForm();
		},
		validationSchema: Yup.object().shape({
			// name: Yup.string().required("Jméno nesmí být prázdné"),
			// surname: Yup.string().required("Příjmení nesmí být prázdné"),
			// email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			// vat_number: Yup.string()
			// 	.max(8, "IČO může obsahovat maximálně 8 čísel")
			// 	.required("IČO musí být vyplněné"),
		}),
	});
	return (
		<div>
			<div
				className="flex flex-row w-full items-center justify-start hover:cursor-pointer hover:bg-gray-50 px-6 py-3 gap-4"
				onClick={() => setIsVisible(true)}
			>
				<svg
					width="24"
					height="20"
					aria-hidden="true"
					focusable="false"
					data-prefix="fat"
					data-icon="user-plus"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 512"
				>
					<path
						fill="currentColor"
						d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 16c61.76 0 112 50.24 112 112S285.8 240 224 240S112 189.8 112 128S162.2 16 224 16zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 496H34.67C24.37 496 16 487.6 16 477.3C16 390.6 86.58 320 173.3 320h101.3C361.4 320 432 390.6 432 477.3C432 487.6 423.6 496 413.3 496zM632 216h-80v-80C552 131.6 548.4 128 544 128s-8 3.594-8 8v80h-80C451.6 216 448 219.6 448 224s3.594 8 8 8h80v80C536 316.4 539.6 320 544 320s8-3.594 8-8v-80h80C636.4 232 640 228.4 640 224S636.4 216 632 216z"
					></path>
				</svg>
				<a className="text-gray-700 text-sm">Přidání dalšího účtu</a>
			</div>
			<Modal isOpen={isVisible} onClose={() => setIsVisible(!isVisible)}>
				<H3>Přidání nového účtu</H3>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex flex-row space-x-6 mb-10">
						{options.map((option) => {
							return (
								<div key={option.type} className="flex items-center">
									<input
										id={option.type}
										name="accType"
										type="radio"
										value={option.type}
										onChange={() => formik.setFieldValue("accType", option.type)}
										// defaultChecked={option.type === "sportsman"}
										className="focus:ring-main-500 text-main-600"
										disabled={user?.[option.type] != null}
										onClick={() => setActiveOption(option.type)}
									/>
									<label
										htmlFor={option.type}
										className="ml-3 block text-sm font-medium text-gray-700"
									>
										{option.name}
									</label>
								</div>
							);
						})}
					</div>
					{activeOption == "sportsman" && (
						<div className="flex flex-col gap-4 mt-4 mb-10">
							<InputWrapper
								formik={formik}
								name="name"
								type="text"
								isRequired={true}
								description="Jméno"
							/>
							<InputWrapper
								formik={formik}
								name="surname"
								type="text"
								isRequired={true}
								description="Příjmení"
							/>
						</div>
					)}
					{activeOption == "coach" && (
						<div className="flex flex-col gap-4 mt-4 mb-10">
							<InputWrapper
								formik={formik}
								name="name"
								type="text"
								isRequired={true}
								description="Jméno"
							/>
							<InputWrapper
								formik={formik}
								name="surname"
								type="text"
								isRequired={true}
								description="Příjmení"
							/>
							<InputWrapper
								formik={formik}
								name="vat_number"
								type="string"
								isRequired={true}
								description="IČO"
							/>
						</div>
					)}
					{activeOption == "sportsground" && (
						<div className="flex flex-col gap-4 mt-4 mb-10">
							<InputWrapper
								formik={formik}
								name="name"
								type="text"
								isRequired={true}
								description="Název"
							/>
							<div className="grid mt-4 grid-cols-2 gap-x-4 gap-y-9">
								<InputWrapper
									className="col-span-2"
									formik={formik}
									name="street"
									type="text"
									isRequired
									description="Ulice a číslo popisné"
								/>
								<InputWrapper
									formik={formik}
									name="city"
									type="text"
									isRequired
									description="Město"
								/>
								<InputWrapper formik={formik} name="zip" type="text" isRequired description="PSČ" />
							</div>
							<InputWrapper
								formik={formik}
								name="vat_number"
								type="string"
								isRequired={true}
								description="IČO"
							/>
						</div>
					)}
					<ButtonSubmit>Přidat další účet</ButtonSubmit>
				</form>
			</Modal>
		</div>
	);
}
