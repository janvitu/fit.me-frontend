import { Modal, InputWrapper } from "@src/molecules";
import { ButtonSubmit, H1, H2 } from "@src/atoms";
import { useFormik } from "formik";
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useMutation } from "@apollo/client";
const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GQL_SERVER,
	cache: new InMemoryCache(),
});

const FORGOTEN_PASSWORD = gql`
	mutation forgotenPassword($email: String!) {
		forgotenPassword(email: $email)
	}
`;

export function ForgotenPasswordModal({ isOpen, onClose }) {
	const [forgotenPassword] = useMutation(FORGOTEN_PASSWORD);
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			forgotenPassword({
				variables: {
					email: values.email,
				},
			}).then(() => {
				onClose();
			});
		},
	});
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="py-12">
				<H2>Zapomenuté heslo</H2>
				<ApolloProvider client={client}>
					<form className="space-y-9" onSubmit={formik.handleSubmit}>
						<InputWrapper
							formik={formik}
							name="email"
							type="email"
							isRequired
							description="E-mail"
						/>
						<ButtonSubmit>Odeslat</ButtonSubmit>
					</form>
				</ApolloProvider>
			</div>
		</Modal>
	);
}
