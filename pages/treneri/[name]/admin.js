import { AdminTrainerForm } from "@src/organisms";
import { DynamicSite } from "@src/templates";
import { XlWrapper } from "@src/atoms";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { useFormik } from "formik";

const SPORTS_GROUND_MUTATION = gql`
	mutation updateCoach(
		$token: String!
		$name: String
		$openning_hours_from: String
		$openning_hours_to: String
		$web: String
		$phone: String
		$description: String
		$cover_photo_url: String
		$street: String
		$number: Int
		$city: String
		$region: String
		$state: String
		$zip: String
	) {
		updateCoach(
			token: $token
			name: $name
			openning_hours_from: $openning_hours_from
			openning_hours_to: $openning_hours_to
			web: $web
			phone: $phone
			description: $description
			cover_photo_url: $cover_photo_url
			street: $street
			number: $number
			city: $city
			region: $region
			state: $state
			zip: $zip
		)
	}
`;

export default function TrainerAdminPage() {
	const [updateCoach] = useMutation(SPORTS_GROUND_MUTATION);
	const formik = useFormik({
		initialValues: {
			name: "",
			shortcut: "",
			country: "",
			addressStreet: "",
			addressNumber: "",
			region: "",
			city: "",
			postalCode: "",
			about: "",
			activities: [""],
			paymentOptions: [""],
			facility: [""],
			openHoursFrom: "",
			openHoursTo: "",
			companyWebsite: "",
			companyPhone: "",
			titleImage: "",
			images: [""],
		},
		onSubmit: async (values) => {
			const load = toast.loading("Požadavek se zpracovává");
			await updateCoach({
				variables: {
					token: window.localStorage.getItem("token"),
					name: values.name,
					web: values.companyWebsite,
					phone: values.companyPhone,
					description: values.about,
					street: values.addressStreet,
					number: values.addressNumber,
					city: values.city,
					region: values.region,
					zip: values.postalCode,
				},
			})
				.then((res) => {
					console.log(res);
					// Router.push("/prihlasit-se");
					toast.dismiss(load);
					toast.success("Změny uloženy");
				})
				.catch((err) => {
					toast.dismiss(load);
					toast.error("Došlo k chybě při ukládání změn");
					console.log(err);
				});
		},
		validationSchema: Yup.object().shape({
			// name: Yup.string().required("Jméno nesmí být prázdné"),
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
				<div className="bg-gray-100">
					<XlWrapper>
						<AdminTrainerForm formik={formik} />
						<div className="hidden sm:block" aria-hidden="true">
							<div className="py-5">
								<div className="border-t border-gray-200" />
							</div>
						</div>
					</XlWrapper>
				</div>
			</DynamicSite>
		</>
	);
}
