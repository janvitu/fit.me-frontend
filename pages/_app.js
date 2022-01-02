import "@assets/css/tailwind.css";
import { CustomToaster } from "@src/atoms";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GQL_SERVER,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<CustomToaster />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
