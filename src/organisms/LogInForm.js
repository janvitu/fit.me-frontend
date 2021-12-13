import { InputWrapper } from "@src/molecules";
import { ButtonSubmit, CustomToaster } from "@src/atoms";
import { ForgotenPasswordModal } from "@src/organisms";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useLazyQuery } from "@apollo/client";
import Router from "next/router";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const LOG_IN = gql`
	query UserSignIn($email: String!, $password: String!, $accType: String) {
		userSignIn(email: $email, password: $password, accType: $accType) {
			user {
				id
				verified
			}
			token
		}
	}
`;
const notificationMethods = [
	{ id: "sportsman", title: "Sportovec" },
	{ id: "coach", title: "Trenér" },
	{ id: "sports_ground", title: "Sportoviště" },
];

export function LogInForm() {
	const [userSignIn, { loading, error, data }] = useLazyQuery(LOG_IN);
	const [modalOpen, setModalOpen] = useState(false);
	useEffect(() => {
		if (!data && loading) {
			const loadToast = toast.loading("Požadavek se zpracovává");
		}
		if (data && !loading) {
			toast.dismiss(loadToast);
			toast.success("Přihlášení úspěšné, vítejte!");
			Router.push("/sportoviste");
		}
		if (error) {
			toast.dismiss(loadToast);
			toast.error("Přihlášení se nezdařilo");
		}
	}, [data, loading]);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			accType: "sportsman",
		},
		onSubmit: async (values) => {
			await userSignIn({
				variables: {
					email: values.email,
					password: values.password,
					accType: values.accType,
				},
			}).then((res) => {
				window.localStorage.setItem("token", res.data.userSignIn.token);
			});
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email("Špatný formát emailu").required("Email nesmí být prázdný"),
			password: Yup.string().required("Heslo nesmí být prázdné"),
		}),
	});
	return (
		<>
			<form className="space-y-9" onSubmit={formik.handleSubmit}>
				<InputWrapper formik={formik} name="email" type="email" isRequired description="E-mail" />
				<InputWrapper
					formik={formik}
					name="password"
					type="password"
					isRequired
					description="Heslo"
				/>
				<div className="text-sm">
					<button
						type="button"
						onClick={() => setModalOpen(true)}
						className="font-medium text-main-600 hover:text-main-700"
					>
						Zapomenuté heslo
					</button>
				</div>
				<fieldset className="mt-4">
					<legend className="sr-only">Notification method</legend>
					<div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
						{notificationMethods.map((notificationMethod) => (
							<div key={notificationMethod.id} className="flex items-center">
								<input
									id={notificationMethod.id}
									name="notification-method"
									type="radio"
									value={notificationMethod.id}
									onChange={() => formik.setFieldValue("accType", notificationMethod.id)}
									defaultChecked={notificationMethod.id === "sportsman"}
									className="focus:ring-main-500 text-main-600"
								/>
								<label
									htmlFor={notificationMethod.id}
									className="ml-3 block text-sm font-medium text-gray-700"
								>
									{notificationMethod.title}
								</label>
							</div>
						))}
					</div>
				</fieldset>
				<ButtonSubmit>Přihlásit se</ButtonSubmit>
				{/* <CustomToaster /> */}
			</form>
			{modalOpen && (
				<ForgotenPasswordModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
			)}
		</>
	);
}
