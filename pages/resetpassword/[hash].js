import { XlWrapper, ButtonSubmit, H2 } from "@src/atoms";
import { useFormik } from "formik";
import { InputWrapper } from "@src/molecules";
import * as Yup from "yup";
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useMutation } from "@apollo/client";
import router from "next/router";
const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GQL_SERVER,
	cache: new InMemoryCache(),
});

const RESET_PASS = gql`
	mutation resetPassword($email: String!) {
		resetPassword(email: $email)
	}
`;

export function ResetPassword() {
	const [resetPassword] = useMutation(RESET_PASS);
	const formik = useFormik({
		initialValues: {
			password: "",
			passwordConfirm: "",
		},
		onSubmit: (values) => {
			resetPassword({
				variables: {
					password: values.password,
					passwordResetHash: router.query.hash,
				},
			}).then(() => {
				router.push("/prihlasit-se");
			});
		},
		validationSchema: Yup.object().shape({
			password: Yup.string()
				.min(8, "Heslo musí obsahovat minimálně 8 znaků")
				.required("Heslo musí být vyplněno")
				.matches(/^(?=.*[a-záčďéěíňóřšťúůýž])/, "Heslo musí obsahovat alespoň jedno malé písmeno")
				.matches(/^(?=.*[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ])/, "Heslo musí obsahovat alespoň jedno velké písmeno")
				.matches(/^(?=.*\d)/, "Heslo musí obsahovat alespoň jedno číslo"),
			passwordConfirm: Yup.string()
				.oneOf([Yup.ref("password")], `Hesla se neshoduj`)
				.required("Pole musí být vyplněné"),
		}),
	});
	return (
		<XlWrapper>
			<ApolloProvider client={client}>
				<H2>Změna zapomenutého hesla</H2>
				<form className="space-y-9" onSubmit={formik.handleSubmit}>
					<InputWrapper
						formik={formik}
						name="password"
						type="password"
						isRequired
						description="Heslo"
					/>
					<InputWrapper
						formik={formik}
						name="passwordConfirm"
						type="password"
						isRequired
						description="Znovu zadejte heslo"
					/>
					<div className="flex justify-center">
						<ButtonSubmit>Změnit heslo</ButtonSubmit>
					</div>
				</form>
			</ApolloProvider>
		</XlWrapper>
	);
}
