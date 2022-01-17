import { gql, useLazyQuery } from "@apollo/client";
import Router from "next/router";
import { createContext, useState, useEffect } from "react";

const GET_USER = gql`
	query GetUser($token: String!) {
		getUserByToken(token: $token) {
			id
			email
			sportsman {
				id
				username
				name
				surname
				profile_photo {
					name
					location
				}
			}
			sportsground {
				id
				name
				username
				profile_photo {
					name
					location
				}
			}
			coach {
				id
				name
				surname
				username
				profile_photo {
					name
					location
				}
			}
		}
	}
`;

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);
	const [activeAcc, setActiveAcc] = useState(null);

	const [user, setUser] = useState(null);
	useEffect(() => {
		const acc = localStorage.getItem("activeAcc");
		if (acc) {
			setActiveAcc(acc);
		}
		const token = localStorage.getItem("token");
		if (token) {
			getUser({
				variables: {
					token: token,
				},
			});
		}

		if (data?.getUserByToken && !loading) {
			setUser(data.getUserByToken);
		}
		if (!token) {
			Router.push("/prihlasit-se");
		}
	}, [data, loading, error]);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				activeAcc,
				setActiveAcc,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
