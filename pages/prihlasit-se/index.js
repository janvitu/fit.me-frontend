import { H1, SmWrapper, CustomToaster } from "@src/atoms";
import { LogInForm } from "@src/organisms";
import { StaticSite } from "@src/templates";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GQL_SERVER,
	cache: new InMemoryCache(),
});
console.log(process.env.NEXT_PUBLIC_GQL_SERVER);
export default function LogIn() {
	return (
		<StaticSite>
			<CustomToaster />
			<SmWrapper>
				<div className="min-h-[60vh] flex flex-col justify-center">
					<div className="mb-8">
						<H1>Přihlašte se</H1>
					</div>
					<div className="w-full">
						<ApolloProvider client={client}>
							<LogInForm />
						</ApolloProvider>
					</div>
				</div>
			</SmWrapper>
		</StaticSite>
	);
}
