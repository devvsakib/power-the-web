import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext<any | null>(null);

export const authReducer = (state: { user: any }, action: { type: any; payload: any }) => {
	switch (action.type) {
		case "LOGIN":
			return {
				user: action.payload,
			};
		case "LOGOUT":
			return {
				user: null,
			};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(authReducer, { user: null });

	useEffect(() => {
		const user = JSON.parse(sessionStorage.getItem("user")!);
		if (user) {
			dispatch({
				type: "LOGIN",
				payload: user,
			});
		}
	}, []);

	return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
